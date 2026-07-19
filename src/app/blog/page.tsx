import Link from "next/link";
import Image from "next/image";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { BLOG_POSTS } from "@/lib/constants";

export const metadata = {
  title: "Blog | Varanda Viva Design - Dicas para Área Externa",
  description:
    "Dicas, guias e tendências para decolar sua área externa. Móveis outdoor, fibra sintética e design em Uberaba.",
};

export default function BlogPage() {
  return (
    <div className="pt-20">
      <section className="py-20 bg-verde">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-areia text-sm font-semibold uppercase tracking-widest">
            Blog
          </span>
          <h1 className="font-serif text-4xl md:text-6xl font-bold text-white mt-4 mb-6">
            Dicas & Inspiração
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Guias, tendências e tudo o que você precisa saber sobre móveis para área externa.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {BLOG_POSTS.map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.slug}`}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow border border-gray-100"
              >
                <div className="relative aspect-[16/9] overflow-hidden bg-gray-100">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar size={14} />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={14} />
                      {post.readTime}
                    </span>
                  </div>
                  <h2 className="font-serif text-xl font-bold text-verde mb-2 group-hover:text-terracota transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">{post.excerpt}</p>
                  <span className="inline-flex items-center gap-1 text-terracota font-medium text-sm">
                    Ler artigo
                    <ArrowRight size={14} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
