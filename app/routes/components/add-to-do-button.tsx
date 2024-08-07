import { Plus } from "lucide-react"
import { Button } from "~/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "~/components/ui/dialog"
import { Input } from "~/components/ui/input"
import { Textarea } from "~/components/ui/textarea"

export function AddToDoButton() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="flex items-center">
          <Plus className="mr-2 w-4" />
          {"リストの追加"}
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{"リストの追加"}</DialogTitle>
        </DialogHeader>
        <Textarea placeholder="今から何する？" />
        <Input placeholder="メモ" />
        <div className="flex space-x-4">
          <Button>{"締め切り"}</Button>
          <Button>{"通知"}</Button>
          <Button>{"タグ"}</Button>
        </div>
        <DialogFooter>
          <Button type="submit">{"追加"}</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
