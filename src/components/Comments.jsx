import { ChevronUp, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const commentsData = [
  {
    id: "1",
    author: "John",
    timeAgo: "15 hours ago",
    content: "Initial Comment 1",
    replies: [
      {
        id: "2",
        author: "Sam",
        timeAgo: "14 hours ago",
        content: "Reply to Intital Comment",
        replies: [
          {
            id: "3",
            author: "Danny",
            timeAgo: "13 hours ago",
            content: "Nested Reply",
            replies: [
              {
                id: "4",
                author: "Stephen",
                timeAgo: "3 hours ago",
                content: "Reply to the Nested Reply",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: "5",
    author: "Sam",
    timeAgo: "12 hours ago",
    content: "Initial Comment 2",
    replies: [
      {
        id: "6",
        author: "Kevin",
        timeAgo: "8 hours ago",
        content: "Reply to Intital Comment",
      },
    ],
  },
];

function CommentItem({ comment, depth = 0 }) {
  return (
    <div className={`border-l border-gray-400 pl-2`}>
      <div className="flex items-start gap-2 py-2">
        <Button
          variant="ghost"
          size="sm"
          className="h-4 w-4 p-0 text-gray-800 hover:text-gray-600"
        >
          <ChevronUp className="h-3 w-3" />
        </Button>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-1">
            <span className="font-medium text-gray-700">{comment.author}</span>
            <span>|</span>
            <span>{comment.timeAgo}</span>
          </div>
          <div className="text-sm text-gray-800 leading-relaxed whitespace-pre-line mb-2">
            {comment.content}
          </div>
          {/* <Button
            variant="link"
            className="h-auto p-0 text-xs text-gray-500 hover:text-gray-700"
          >
            reply
          </Button> */}
        </div>
      </div>
      {comment.replies && (
        <div className="mt-1 ml-5">
          {comment.replies.map((reply) => (
            <CommentItem key={reply.id} comment={reply} depth={depth + 1} />
          ))}
        </div>
      )}
    </div>
  );
}

export default function Comments() {
  return (
    <div className="max-w-4xl mx-auto border border-black rounded-lg mt-10 sm:mt-12 md:mt-16 lg:mt-20  max-md:w-[85%] max-lg:w-[90%]">
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div className="space-y-1">
          {commentsData.map((comment) => (
            <CommentItem key={comment.id} comment={comment} />
          ))}
        </div>
      </div>
      <a href="https://github.com/AVIN4SH/comments-thread" target="_blank">
        <Button
          variant="primary"
          size="lg"
          className="h-12 w-full p-4 bg-black rounded-sm text-white hover:bg-black/90 transition-colors"
        >
          <span className="border border-white rounded-full p-1 scale-125">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-github-icon lucide-github"
            >
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
              <path d="M9 18c-4.51 2-5-2-7-2" />
            </svg>
          </span>
          Source Code
        </Button>
      </a>
    </div>
  );
}
