export interface FileNode {
    name: string;
    type: 'folder' | 'file';
    children?: FileNode[];
  }