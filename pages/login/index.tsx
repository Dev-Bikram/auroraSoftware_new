import Wrapper from "@/layout/wrapper/Wrapper";
import dynamic from "next/dynamic";




const LoingMain = dynamic(() => import('@/components/LoingMain/LoingMain'), { ssr: false })
 






export default function index() {
  return (
    <Wrapper>
        <LoingMain />
    </Wrapper>
  );
}
