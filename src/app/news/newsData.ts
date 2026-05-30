import type { StaticImageData } from "next/image";
import ijImg from "../assets/img/news/ij.webp";
import trazImg from "../assets/img/news/traz.jpg";

// A single news/article entry. Add new items to the `newsData` array below.
// `content` is an array of paragraphs (each string renders as its own <p>).
// `image` is optional — import it at the top and reference it here if you have one.
export interface NewsItem {
  slug: string; // URL-friendly unique id, e.g. "new-warehouse-cikarang"
  title: string;
  date: string; // ISO date, e.g. "2026-05-20"
  author?: string;
  excerpt: string; // short summary shown on cards
  image?: StaticImageData; // optional cover image
  content: string[]; // article body, one string per paragraph
}

// ─── Add your news here ──────────────────────────────────────────────
export const newsData: NewsItem[] = [
  {
    slug: "surya-jaya-group-perluas-jaringan-distribusi-ban-dan-pelek",
    title:
      "Surya Jaya Group Perluas Jaringan Distribusi Ban dan Pelek di Indonesia",
    date: "2026-05-20",
    author: "Redaksi Indonesiajurnalis.com",
    image: ijImg,
    excerpt:
      "Surya Jaya Group terus memperkuat posisinya sebagai distributor ban terkemuka di Indonesia dengan menghadirkan berbagai merek dan komponen ternama untuk kebutuhan transportasi, industri, hingga alat berat.",
    content: [
      "JAKARTA, Indonesia jurnalis – Surya Jaya Group terus memperkuat posisinya sebagai distributor ban terkemuka di Indonesia dengan menghadirkan berbagai merek dan komponen ternama untuk kebutuhan transportasi, industri, hingga alat berat.",
      "Hal tersebut disampaikan Viedy selaku Sales Engineer Surya Jaya Group saat menghadiri dan mengikuti pameran di Musyawarah Nasional (Munas) III Asosiasi Pengusaha Truk Indonesia (Aptrindo) di Hotel Borobudur, Jakarta, Rabu (20/5/2026).",
      "Dalam keterangannya, viedy menjelaskan bahwa Surya Jaya Group menyediakan berbagai produk unggulan, mulai dari ban merek Bridgestone, Dunlop, hingga produk pelek untuk kendaraan niaga dan industri.",
      "“Dari sini kami memiliki berbagai produk, mulai dari Bridgestone, Dunlop, dan produk terbaru lainnya. Selain itu kami juga menyediakan pelek. Kantor pusat kami berada di Jakarta, dan saat ini kami memiliki sekitar 20 titik layanan di tingkat nasional,” ujar Viedy",
      "Ia juga membuka peluang kerja sama dengan berbagai pihak untuk memperluas jaringan bisnis dan pelayanan perusahaan di sektor otomotif dan transportasi.",
    ],
  },
  {
    slug: "viedy-surya-jaya-group-20-titik-layanan-nasional",
    title:
      "Viedy Surya Jaya Group: Punya 20 Titik Layanan Nasional, Siap Pasok Ban Truk dan Alat Berat Seluruh Indonesia",
    date: "2026-05-20",
    author: "Lucky Suryani (traznews.com)",
    image: trazImg,
    excerpt:
      "Dengan sekitar 20 titik layanan nasional, Surya Jaya Group siap memasok ban truk dan alat berat ke seluruh wilayah Indonesia.",
    content: [
      "JAKARTA — Traznews. Com  Surya Jaya Group terus memperkuat posisinya sebagai distributor ban terkemuka di Indonesia dengan menghadirkan berbagai merek dan komponen ternama untuk kebutuhan transportasi, industri, hingga alat berat.",
      "Hal tersebut disampaikan Viedy selaku Sales Engineer Surya Jaya Group saat menghadiri dan mengikuti pameran di Musyawarah Nasional (Munas) III Asosiasi Pengusaha Truk Indonesia (Aptrindo) di Hotel Borobudur, Jakarta, Rabu (20/5/2026).",
      "Dalam keterangannya, viedy menjelaskan bahwa Surya Jaya Group menyediakan berbagai produk unggulan, mulai dari ban merek Bridgestone, Dunlop, hingga produk pelek untuk kendaraan niaga dan industri.",
      "“Dari sini kami memiliki berbagai produk, mulai dari Bridgestone, Gajah Tunggal, dan produk terbaru lainnya. Selain itu kami juga menyediakan pelek. Kantor pusat kami berada di Jakarta, dan saat ini kami memiliki sekitar 20 titik layanan di tingkat nasional,” ujar Viedy",
      "Ia juga membuka peluang kerja sama dengan berbagai pihak untuk memperluas jaringan bisnis dan pelayanan perusahaan di sektor otomotif dan transportasi.",
      "“Kalau misalnya ingin berkolaborasi, silakan bisa menghubungi kami,” tambahnya.",
      "Menurut viedy, pemasaran Surya Jaya Group telah menjangkau hampir seluruh wilayah Indonesia. Saat ini perusahaan memiliki sejumlah titik operasional utama di beberapa daerah strategis, seperti Jakarta, Surabaya, Jabodetabek dan Makasar.",
      "Dengan jaringan distribusi yang terus berkembang, Surya Jaya Group optimistis mampu memenuhi kebutuhan pasar nasional, khususnya di sektor kendaraan niaga, industri, dan alat berat yang terus mengalami pertumbuhan.",
      "Sementara itu, Ketua Umum Aptrindo, Gemilang Tarigan, menegaskan bahwa sektor transportasi dan logistik memiliki peran vital dalam menjaga perputaran ekonomi nasional. Menurutnya, aktivitas distribusi barang tetap berjalan tanpa henti meski masyarakat sedang beristirahat.",
    ],
  },
];

// Look up a single news item by its slug.
export const getNewsBySlug = (slug: string): NewsItem | undefined =>
  newsData.find((item) => item.slug === slug);

// All news sorted newest-first. Computed once and shared by the list page and
// the homepage teaser so ordering is consistent everywhere.
const sortedNews: NewsItem[] = [...newsData].sort(
  (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
);

// Return every news item, newest first.
export const getAllNews = (): NewsItem[] => sortedNews;

// Return the most recent news items (newest first), capped at `limit`.
export const getLatestNews = (limit: number): NewsItem[] =>
  sortedNews.slice(0, limit);

// Format an ISO date string into a human-readable label, e.g. "May 20, 2026".
export const formatNewsDate = (date: string): string => {
  const parsed = new Date(date);
  if (Number.isNaN(parsed.getTime())) {
    return date;
  }
  return parsed.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};
