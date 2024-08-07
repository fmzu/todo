import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select"

export function MemberSelect() {
  return (
    <Select>
      <SelectTrigger className="w-64">
        <SelectValue placeholder="本日の担当" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>{"本日の担当"}</SelectLabel>
          <SelectItem value="apple">{"山田一郎"}</SelectItem>
          <SelectItem value="banana">{"山田二郎"}</SelectItem>
          <SelectItem value="blueberry">{"山田三郎"}</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
