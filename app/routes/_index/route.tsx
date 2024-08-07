import type { MetaFunction } from "@remix-run/node"
import { Input } from "~/app/components/ui/input"
import { Separator } from "~/app/components/ui/separator"
import { ToDoCard } from "./components/to-do-card"
import { DatePicker } from "./components/date-picker"
import { AddToDoButton } from "./components/add-to-do-button"
import { MemberSelect } from "./components/member-select"

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
      <div className="flex space-x-2 items-end">
        <Input placeholder="Enter your name" className="h-16" />
        <MemberSelect />
      </div>
      <Separator />
      <div className="flex justify-end">
        <AddToDoButton />
      </div>
      <ToDoCard />
    </div>
  )
}
