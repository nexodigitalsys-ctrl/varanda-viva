import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { BLOG_POSTS } from "@/lib/constants";

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) return { title: "Artigo não encontrado" };

  return {
    title: `${post.title} | Blog Mendes Design`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) return notFound();

  return (
    <div className="pt-20">
      <article className="py-24 bg-card">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-gold font-medium mb-8 hover:text-gold transition-colors"
          >
            <ArrowLeft size={16} />
            Voltar para o blog
          </Link>

          <div className="flex items-center gap-4 text-sm text-text-secondary mb-4">
            <span className="flex items-center gap-1">
              <Calendar size={14} />
              {post.date}
            </span>
            <span className="flex items-center gap-1">
              <Clock size={14} />
              {post.readTime}
            </span>
          </div>

          <h1 className="font-serif text-3xl md:text-4xl font-bold text-gold mb-6">
            {post.title}
          </h1>

          <div className="relative aspect-[16/9] rounded-2xl overflow-hidden mb-8">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
            />
          </div>

          <div className="prose prose-lg max-w-none text-text-secondary">
            <p className="text-xl leading-relaxed mb-6">{post.excerpt}</p>
            <p className="mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <p className="mb-4">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum.
            </p>
            <h2 className="font-serif text-2xl font-bold text-gold mt-8 mb-4">
              Dicas práticas
            </h2>
            <p className="mb-4">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
              laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi
              architecto beatae vitae dicta sunt explicabo.
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Escolha materiais resistentes ao sol e chuva</li>
              <li>Considere o clima da região do Triângulo Mineiro</li>
              <li>Invista em design autoral e durabilidade</li>
              <li>Faça manutenção regular dos móveis</li>
            </ul>
            <p>
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
              consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
            </p>
          </div>
        </div>
      </article>
    </div>
  );
}