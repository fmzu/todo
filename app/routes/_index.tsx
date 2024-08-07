import type { MetaFunction } from "@remix-run/node"
import { Input } from "~/components/ui/input"
import { Separator } from "~/components/ui/separator"
import { ToDoCard } from "./components/to-do-card"
import { DatePicker } from "./components/date-picker"
import { NewToDoButton } from "./components/new-to-do-button"

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ]
}

export default function Index() {
  return (
    <div className="p-4 space-y-4">
      <div className="flex justify-end">
        <DatePicker />
      </div>
      <Input placeholder="Enter your name" className="h-16" />
      <Separator />
      <div className="flex justify-end">
        <NewToDoButton />
      </div>
      <ToDoCard />
    </div>
  )
}
