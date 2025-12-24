import { Metadata } from "next";
import { getBlogPosts } from "@/lib/content";
import { BlogCard } from "@/components/blog/blog-card";
import { PenLine } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Thoughts on software development, machine learning, and building intelligent systems.",
};

export default function BlogPage() {
  const posts = getBlogPosts();

  return (
    <div className="py-20">
      <div className="container mx-auto max-w-5xl px-4">
        <div className="mb-12">
          <h1 className="text-4xl font-bold tracking-tight mb-4">Blog</h1>
          <p className="text-muted-foreground text-lg max-w-2xl">
            Thoughts on software development, machine learning, and building
            intelligent systems.
          </p>
        </div>

        {posts.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2">
            {posts.map((post, index) => (
              <BlogCard key={post.slug} post={post} index={index} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 space-y-4">
            <PenLine className="h-12 w-12 text-muted-foreground mx-auto" />
            <h2 className="text-xl font-semibold">Coming Soon</h2>
            <p className="text-muted-foreground max-w-md mx-auto">
              I&apos;m working on some articles about software development and
              machine learning. Check back soon!
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
