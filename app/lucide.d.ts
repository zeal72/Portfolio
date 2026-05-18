declare const lucide: {
  createIcons: () => void;
};

declare namespace React {
  interface HTMLAttributes<T> {
    width?: string | number;
    height?: string | number;
  }
}
