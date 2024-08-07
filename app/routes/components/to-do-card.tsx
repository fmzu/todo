import { Card, CardContent } from "~/components/ui/card"
import { Checkbox } from "~/components/ui/checkbox"

export function ToDoCard() {
  return (
    <Card>
      <CardContent>
        <div className="flex space-x-2 items-center pt-6">
          <Checkbox id="terms" />
          <p>{"出社したら挨拶する"}</p>
        </div>
      </CardContent>
    </Card>
  )
}
