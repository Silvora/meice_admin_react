/** @format */

/// <reference types="vite/client" />

interface ImportMetaEnv {
	readonly VITE_APP_TIME: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
