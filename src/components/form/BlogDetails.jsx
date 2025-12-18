import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Calendar,
  MessageCircle,
  Eye,
  ArrowUp,
  Search,
  Home,
} from "lucide-react";
import { CornerUpLeft } from "lucide-react"
import img from "@/components/img/logo/b_details04.jpg"
import img2 from "@/components/img/logo/b_details03.jpg"
import { useState } from "react";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";

const commentsData = [
  {
    id: 1,
    name: "Alina Kelian",
    date: "19th May 2024",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    avatar: "https://randomuser.me/api/portraits/women/32.jpg",
  },
  {
    id: 2,
    name: "Rlex Kelian",
    date: "19th May 2024",
    text: "Do one say wind up buggered bobby bite your arm off gutted mate.",
    avatar: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    id: 3,
    name: "Roboto Alex",
    date: "21th May 2024",
    text: "Baking cakes is cobblers wellies William geeza bits and bobs.",
    avatar: "https://randomuser.me/api/portraits/men/12.jpg",
  },
]

export default function BlogPage() {
    const navigate = useNavigate();

     const [activeReply, setActiveReply] = useState(null)
  const [submitted, setSubmitted] = useState(null)
  const [replyText, setReplyText] = useState("")

  const handleSubmit = (id) => {
    setSubmitted(id)
    setActiveReply(null)
    setReplyText("")
  }
  return (
    <main className="w-full bg-black text-white">
      {/* HEADER */}
         <section className="relative h-[60vh] flex items-center justify-center bg-gradient-to-br from-black via-slate-900 to-black">
                <div className="absolute inset-0 opacity-30 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />
                <div className="relative z-10 text-center space-y-6">
                  <h1 className="text-5xl md:text-7xl font-bold">Blog Details</h1>
                  <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-orange-500 to-purple-600 text-sm">
                    <Home size={16} /> <p onClick={() => navigate("/")} className="cursor-pointer"> Home</p> • Blog Details
                  </div>
                </div>
         </section>
      <section className="max-w-7xl mx-auto px-6 pt-24 grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* MAIN CONTENT */}
        <article className="lg:col-span-2">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            With our vastly improved notifications system, users have more control.
          </h1>

          {/* META */}
          <div className="flex flex-wrap items-center gap-6 text-sm text-gray-400 mt-6">
            <span className="flex items-center gap-2"><Eye className="w-4 h-4" /> 100 Views</span>
            <span className="flex items-center gap-2"><MessageCircle className="w-4 h-4" /> 35 Comments</span>
            <span className="flex items-center gap-2"><Calendar className="w-4 h-4" /> 24th March 2024</span>
          </div>

          {/* BODY */}
          <div className="mt-10 space-y-6 text-gray-300 leading-relaxed">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <p>
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>

          {/* QUOTE */}
          <Card className="mt-12 bg-gradient-to-r from-indigo-900 via-purple-900 to-orange-800 border-none rounded-2xl">
            <CardContent className="p-10">
              <p className="text-orange-800 text-lg mb-2 text-center items-center">By Rosalina Pong</p>
              <h3 className="text-2xl md:text-3xl font-semibold leading-snug">
                Viral dreamcatcher keytar typewriter, aesthetic offal umami. Aesthetic polaroid pug pitchfork post-ironic.
              </h3>
            </CardContent>
          </Card>

          {/* IMAGE */}
          <img
            src="src/components/img/logo/b_details01.jpg"
            alt="blog"
            className="w-full rounded-2xl mt-12"
          />

          {/* MORE TEXT */}
          <div className="mt-10 space-y-6 ">
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
            </p>
            <p>
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
            </p>
          </div>

          {/* RELATED POSTS */}
         <section className="mt-20">
  <h2 className="text-3xl font-bold mb-8">Related Post</h2>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    {/* Card 1 */}
    <Card className="bg-transparent text-white border-neutral-800 rounded-2xl overflow-hidden">
      <img
        src={img2}
        alt="related post 1"
        className="
          w-full
          h-48
          sm:h-56
          object-cover
          md:-mt-6
          
        
        "
      />

      <CardContent className="p-6">
        <h3 className="text-lg sm:text-xl font-semibold mb-2">
          Auis nostrud exercita ullamco laboris nisi ut
        </h3>
        <p className="text-sm sm:text-lg text-gray-400">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </CardContent>
    </Card>

    {/* Card 2 */}
    <Card className="bg-transparent text-white border-neutral-800 rounded-2xl overflow-hidden">
      <img
        src={img}
        alt="related post 2"
        className="
          w-full
          h-48
          sm:h-56
          object-cover
          md:-mt-6
        "
      />

      <CardContent className="p-6">
        <h3 className="text-lg sm:text-xl font-semibold mb-2">
          Excepteur sint occaecat cupidatat non proident
        </h3>
        <p className="text-sm sm:text-lg text-gray-400">
          Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </CardContent>
    </Card>
  </div>
</section>

          {/* COMMENTS */}
            <section className="mt-24">
      <h2 className="text-3xl font-bold mb-10">Comments</h2>

      {commentsData.map((comment) => (
        <div key={comment.id} className="flex gap-6 mb-12">
          {/* Avatar */}
          <img
            src={comment.avatar}
            className="w-14 h-14 rounded-full object-cover"
          />

          {/* Content */}
          <div className="w-full">
            <p className="font-semibold">
              {comment.name}
              <span className="text-orange-400 text-xs ml-2">
                {comment.date}
              </span>
            </p>

            <p className="text-gray-400 mt-2">{comment.text}</p>

            {/* Reply Button */}
            <Button
              variant="outline"
              size="sm"
              onClick={() => setActiveReply(comment.id)}
              className="mt-3 bg-gradient-to-br from-orange-500 to-purple-600 text-white border-none"
            >
              <CornerUpLeft size={18} className="mr-2" />
              Reply
            </Button>

            {/* Reply Input */}
            {activeReply === comment.id && (
              <div className="mt-4 space-y-3">
                <textarea
                  value={replyText}
                  onChange={(e) => setReplyText(e.target.value)}
                  placeholder="Write your reply..."
                  className="w-full bg-neutral-900 border border-neutral-700 rounded-lg p-3 text-sm focus:outline-none focus:border-orange-500"
                  rows={3}
                />

                <Button
                  onClick={() => handleSubmit(comment.id)}
                  className="bg-gradient-to-r from-orange-500 to-purple-600"
                >
                  Submit
                </Button>
              </div>
            )}

            {/* Thank You Message */}
            {submitted === comment.id && (
              <p className="mt-4 text-green-400 font-medium">
                ✅ Thanks for replying!
              </p>
            )}
          </div>
        </div>
      ))}
    </section>

          {/* REPLY */}
          <section className="mt-20">
            <h2 className="text-3xl font-bold mb-8">Leave a Reply</h2>
            <Card className="bg-gradient-to-r from-indigo-900 via-purple-900 to-orange-800 border-none rounded-2xl">
              <CardContent className="p-8 space-y-4">
                <Input placeholder="Your Name" />
                <Input placeholder="your-real-email@example.com" />
                <Input placeholder="http://your-site-name.com" />
                <Textarea rows={5} placeholder="Write your comment" />
                <Button className="mt-4">Post Comment</Button>
              </CardContent>
            </Card>
          </section>
        </article>

        {/* SIDEBAR */}
        <aside className="space-y-8">
          <Card className="bg-gradient-to-r from-indigo-900 to-orange-800 border-none rounded-2xl">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">Search</h3>
              <div className="flex">
                <Input placeholder="Search..." className="rounded-r-none" />
                <Button className="rounded-l-none"><Search /></Button>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-indigo-900 to-orange-800 border-none rounded-2xl">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">Categories</h3>
              {['Branding', 'Corporate', 'Design', 'Gallery'].map((cat) => (
                <div key={cat} className="flex justify-between py-2 border-b border-white/10">
                  <span>{cat}</span><span>(3)</span>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-indigo-900 to-orange-800 border-none rounded-2xl">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4">Tags</h3>
              <div className="flex flex-wrap gap-3">
                {['App', 'Branding', 'Corporate', 'Design', 'Gallery', 'Video'].map((tag) => (
                  <Button key={tag} variant="outline" size="sm">{tag}</Button>
                ))}
              </div>
            </CardContent>
          </Card>
        </aside>
      </section>

      {/* SCROLL TO TOP */}
      <Button className="fixed bottom-6 right-6 rounded-full w-12 h-12">
        <ArrowUp />
      </Button>

      <Footer />
    </main>
  );
}
