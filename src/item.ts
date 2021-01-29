export interface PromisedMapItem<V> {
  promise: Promise<unknown>;
  resolve: (value?: unknown) => void;
  reject: (reason?: any) => void;
  data: V;
}
