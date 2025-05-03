import { App } from "./App";
import { store } from './provider/store';
import { useAppDispatch, useAppSelector } from "./hooks/useApp";
import type { Product, ID } from "./model";

export { App, store, useAppDispatch, useAppSelector };
export type { Product, ID };