declare module 'merkle-tools' {
    export type Proof<T> = { left: T } | { right: T };

    class MerkleTree {
        constructor(options?: { hashType?: string,
            progressCB?: (progress: number) => void, //callback to call when progress is updated.
            progressInterval?: number //ms in which progress will be updated.
        });

        getMerkleRoot(): Buffer | null;

        getProof(index: number): Proof<string>[] | null;
        getProof(index: number, asBinary: false): Proof<string>[] | null;
        getProof(index: number, asBinary: true): Proof<Buffer>[] | null;

        getLeaf(index: number): Buffer | null;

        getLeafCount(): number;

        getPreparedTree(): string[]
        loadPreparedTree(levels: string[][]): void

        getTreeReadyState(): boolean;

        addLeaf(value: string | Buffer, doHash?: boolean): void;

        addLeaves(value: string[], doHash?: boolean): void;

        makeTree(doubleHash?: boolean): void;

        makeBTCTree(doubleHash?: boolean): void;

        validateProof(
            proof: Proof<string>[] | Proof<Buffer>[],
            targetHash: string | Buffer,
            merkleRoot: string | Buffer,
            doubleHash?: boolean,
        ): boolean;
    }

    export default MerkleTree;
}
