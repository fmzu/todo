import { Plus } from "lucide-react"
import { Button } from "~/components/ui/button"

export function NewToDoButton() {
  return (
    <Button className="flex items-center">
      <Plus className="mr-2 w-4" />
      {"Add a new to-do"}
    </Button>
  )
}
