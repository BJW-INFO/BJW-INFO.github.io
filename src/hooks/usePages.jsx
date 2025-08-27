import { useRouter } from "next/router";
import { pages } from "@/utils";

export const usePages = () => {
    const router = useRouter();
    const path = router.pathname.split('/')[1];
    const state = pages.find(page => page.path === `/${path}`);
    return {
        params: router.query,
        path: path === ""?false:path,
        state,
        go:(path)=>router.push(path),
    }
}