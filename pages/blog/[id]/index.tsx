import Wrapper from "@/layout/wrapper/Wrapper";
import BlogDetails from "@/components/BlogDetails/BlogDetails";
import assest from "@/json/assest";
import RelatedBlog from "@/components/RelatedBlog/RelatedBlog";
import { fetchBlogListDetails } from "@/api/functions/blog.api";
import { QueryClient } from "react-query";
import { queryClient } from "pages/_app";
import { useRouter } from "next/router";







export default function index() {
  const  router = useRouter()
  console.log(router.query.id,": id");
  return(
    <Wrapper>
    <BlogDetails data={undefined} />
</Wrapper>
  )
}
  