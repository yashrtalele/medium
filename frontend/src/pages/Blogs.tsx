import { Appbar } from "../components/Appbar";
import { BlogCard } from "../components/BlogCard";

export const Blogs = () => {
  return (
    <div>
      <Appbar />
      <div className="flex justify-center">
        <div>
          <BlogCard
            authorName="Yash"
            title="How an ugly single-Page Website make $5,000 a Month without Affiliate Marketing"
            content="How an ugly single-Page Website make $5,000 a Month without Affiliate Marketing. How an ugly single-Page Website make $5,000 a Month without Affiliate Marketing. How an ugly single-Page Website make $5,000 a Month without Affiliate Marketing. How an ugly single-Page Website make $5,000 a Month without Affiliate Marketing"
            publishedDate={"9th April 2024"}
          />
          <BlogCard
            authorName="Yash"
            title="How an ugly single-Page Website make $5,000 a Month without Affiliate Marketing"
            content="How an ugly single-Page Website make $5,000 a Month without Affiliate Marketing. How an ugly single-Page Website make $5,000 a Month without Affiliate Marketing. How an ugly single-Page Website make $5,000 a Month without Affiliate Marketing. How an ugly single-Page Website make $5,000 a Month without Affiliate Marketing"
            publishedDate={"9th April 2024"}
          />
          <BlogCard
            authorName="Yash"
            title="How an ugly single-Page Website make $5,000 a Month without Affiliate Marketing"
            content="How an ugly single-Page Website make $5,000 a Month without Affiliate Marketing. How an ugly single-Page Website make $5,000 a Month without Affiliate Marketing. How an ugly single-Page Website make $5,000 a Month without Affiliate Marketing. How an ugly single-Page Website make $5,000 a Month without Affiliate Marketing"
            publishedDate={"9th April 2024"}
          />
        </div>
      </div>
    </div>
  );
};
