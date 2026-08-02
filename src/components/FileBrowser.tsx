import { useMemo, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import type { DriveNode, ScriptFile, ScriptFolder } from "../types";
import Modal from "./Modal";
import styles from "./FileBrowser.module.css";

type Props = {
  root: ScriptFolder;
  basePath: string;
};

type Crumb = { name: string; href: string };

function findFolder(root: ScriptFolder, segments: string[]): ScriptFolder | null {
  let current: ScriptFolder = root;
  for (const seg of segments) {
    const next = current.children.find(
      (c): c is ScriptFolder => c.kind === "folder" && c.slug === seg
    );
    if (!next) return null;
    current = next;
  }
  return current;
}

function sortNodes(nodes: DriveNode[]): DriveNode[] {
  const folders = nodes
    .filter((n): n is ScriptFolder => n.kind === "folder")
    .sort((a, b) => a.name.localeCompare(b.name));
  const files = nodes
    .filter((n): n is ScriptFile => n.kind === "file")
    .sort((a, b) => b.year - a.year || a.name.localeCompare(b.name));
  return [...folders, ...files];
}

export default function FileBrowser({ root, basePath }: Props) {
  const params = useParams();
  const navigate = useNavigate();
  const [openFile, setOpenFile] = useState<ScriptFile | null>(null);

  const splat = params["*"] ?? "";
  const segments = splat.split("/").filter(Boolean);

  const folder = useMemo(() => findFolder(root, segments), [root, segments]);

  const crumbs: Crumb[] = useMemo(() => {
    const list: Crumb[] = [{ name: root.name, href: basePath }];
    let path = basePath;
    let current: ScriptFolder = root;
    for (const seg of segments) {
      const next = current.children.find(
        (c): c is ScriptFolder => c.kind === "folder" && c.slug === seg
      );
      if (!next) break;
      path = `${path}/${next.slug}`;
      list.push({ name: next.name, href: path });
      current = next;
    }
    return list;
  }, [root, segments, basePath]);

  if (!folder) {
    return (
      <div>
        <Breadcrumbs crumbs={[{ name: root.name, href: basePath }]} />
        <p className={styles.empty}>Folder not found.</p>
      </div>
    );
  }

  const sorted = sortNodes(folder.children);
  const currentPath = crumbs[crumbs.length - 1].href;

  return (
    <div>
      <Breadcrumbs crumbs={crumbs} />

      {sorted.length === 0 ? (
        <p className={styles.empty}>This folder is empty.</p>
      ) : (
        <div className={styles.table} role="table" aria-label={folder.name}>
          <div className={`${styles.row} ${styles.head}`} role="row">
            <span className={styles.cellName} role="columnheader">
              Name
            </span>
            <span className={styles.cellRole} role="columnheader">
              Role
            </span>
            <span className={styles.cellYear} role="columnheader">
              Year
            </span>
          </div>
          {sorted.map((node) =>
            node.kind === "folder" ? (
              <button
                key={node.id}
                type="button"
                className={styles.row}
                onClick={() => navigate(`${currentPath}/${node.slug}`)}
                role="row"
              >
                <span className={styles.cellName} role="cell">
                  <FolderIcon />
                  <span className={styles.nameText}>{node.name}</span>
                </span>
                <span className={styles.cellRole} role="cell">
                  {node.children.length} item{node.children.length === 1 ? "" : "s"}
                </span>
                <span className={styles.cellYear} role="cell">
                  —
                </span>
              </button>
            ) : (
              <button
                key={node.id}
                type="button"
                className={styles.row}
                onClick={() => setOpenFile(node)}
                role="row"
              >
                <span className={styles.cellName} role="cell">
                  <FileIcon />
                  <span className={styles.nameText}>
                    {node.name}
                    <span className={styles.ext}>.pdf</span>
                  </span>
                </span>
                <span className={styles.cellRole} role="cell">
                  {node.role}
                </span>
                <span className={styles.cellYear} role="cell">
                  {node.year}
                </span>
              </button>
            )
          )}
        </div>
      )}

      <Modal
        open={openFile !== null}
        onClose={() => setOpenFile(null)}
        title={openFile ? `${openFile.name}.pdf` : ""}
        size="pdf"
      >
        {openFile && (
          <iframe
            src={openFile.pdfUrl}
            title={openFile.name}
            style={{ width: "100%", height: "100%", border: 0 }}
          />
        )}
      </Modal>
    </div>
  );
}

function Breadcrumbs({ crumbs }: { crumbs: Crumb[] }) {
  return (
    <nav className={styles.crumbs} aria-label="Breadcrumb">
      {crumbs.map((c, i) => {
        const isLast = i === crumbs.length - 1;
        return (
          <span key={c.href} className={styles.crumb}>
            {isLast ? (
              <span className={styles.crumbCurrent}>{c.name}</span>
            ) : (
              <Link to={c.href} className={styles.crumbLink}>
                {c.name}
              </Link>
            )}
            {!isLast && <span className={styles.sep}>/</span>}
          </span>
        );
      })}
    </nav>
  );
}

function FolderIcon() {
  return (
    <svg
      className={styles.icon}
      viewBox="0 0 24 24"
      width="20"
      height="20"
      aria-hidden="true"
    >
      <path
        fill="currentColor"
        d="M10 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-8l-2-2z"
      />
    </svg>
  );
}

function FileIcon() {
  return (
    <svg
      className={styles.icon}
      viewBox="0 0 24 24"
      width="20"
      height="20"
      aria-hidden="true"
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
        d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9l-6-6z"
      />
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
        d="M14 3v6h6"
      />
    </svg>
  );
}
