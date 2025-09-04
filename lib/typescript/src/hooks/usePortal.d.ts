import { type ReactNode } from 'react';
export declare const usePortal: (hostName?: string) => {
    registerHost: () => void;
    deregisterHost: () => void;
    addPortal: (name: string, node: ReactNode) => void;
    updatePortal: (name: string, node: ReactNode) => void;
    removePortal: (name: string) => void;
};
//# sourceMappingURL=usePortal.d.ts.map