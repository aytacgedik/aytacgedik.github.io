"use client"

import { useState, FormEvent, SetStateAction } from "react"
import { Bot, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  ChatBubble,
  ChatBubbleAvatar,
  ChatBubbleMessage,
} from "@/components/ui/chat/chat-bubble"
import {
  ExpandableChat,
  ExpandableChatHeader,
  ExpandableChatBody,
  ExpandableChatFooter,
} from "@/components/ui/expandable-chat"
import { ChatMessageList } from "../ui/chat/chat-message"
import { ChatInput } from "../ui/chat/chat-input"

export function ResumeChatbot() {
  const [messages, setMessages] = useState([
    {
      id: Date.now(), 
      content:
        "Hi there! I'm an AI assistant trained on Aytac Gedik's resume. Ask me about his skills, experience, projects, or education!",
      sender: "ai",
    },

  ])

  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    const trimmedInput = input.trim()
    if (!trimmedInput) return

    setMessages((prev) => [
      ...prev,
      {
        id: Date.now(), 
        content: trimmedInput,
        sender: "user",
      },
    ])
    setInput("")
    setIsLoading(true)

  
    console.log("Sending to (Placeholder) AI:", trimmedInput)
    setTimeout(() => {
      let aiResponse = "Feature removed due to API keys security reasons. Please contact me for the full version."

      setMessages((prev) => [
        ...prev,
        {
          id: Date.now(), 
          content: aiResponse,
          sender: "ai",
        },
      ])
      setIsLoading(false)
    }, 1500) 
    
  }

  return (
      <ExpandableChat
        size="lg" 
        position="bottom-right" 
        icon={<Bot className="h-6 w-6" />} 
      >
        <ExpandableChatHeader className="flex-col text-center justify-center">
          <h1 className="text-lg font-semibold">Ask About Aytac's Resume</h1>
          <p className="text-xs text-muted-foreground px-2"> 
            I can answer questions based on Aytac Gedik's profile.
          </p>
        </ExpandableChatHeader>

        <ExpandableChatBody>
          <ChatMessageList>
            {messages.map((message) => (
              <ChatBubble
                key={message.id}
                variant={message.sender === "user" ? "sent" : "received"}
              >
                <ChatBubbleAvatar
                  className="h-8 w-8 shrink-0"
                  fallback={message.sender === "user" ? "You" : "AI"} 
                />
                <ChatBubbleMessage
                  variant={message.sender === "user" ? "sent" : "received"}
                >
                  {message.content}
                </ChatBubbleMessage>
              </ChatBubble>
            ))}

            {isLoading && (
              <ChatBubble variant="received">
                <ChatBubbleAvatar
                  className="h-12 w-12 shrink-0"
                  fallback="AI"
                />
                <ChatBubbleMessage isLoading />
              </ChatBubble>
            )}
          </ChatMessageList>
        </ExpandableChatBody>

        <ExpandableChatFooter>
          <form
            onSubmit={handleSubmit}
            className="relative rounded-lg border bg-background focus-within:ring-1 focus-within:ring-ring"
          >
            <ChatInput
              value={input}
              onChange={(e: { target: { value: SetStateAction<string> } }) => setInput(e.target.value)}
              placeholder="Ask about skills, projects, experience..." 
              className="min-h-12 resize-none rounded-lg bg-background border-0 p-3 shadow-none focus-visible:ring-0 pr-20 " 
            />
            <div className="absolute bottom-2 right-1 flex items-center">
             
              <Button type="submit" size="icon" className="ml-1 w-8 h-8" disabled={isLoading || !input.trim()}> 
                <Send className="size-4" /> 
                <span className="sr-only">Send message</span>
              </Button>
            </div>
          </form>
        </ExpandableChatFooter>
      </ExpandableChat>
  )
}