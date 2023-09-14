import React from 'react'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function SelectBtn() {
  return (
        <Select>
      <SelectTrigger  className="w-[120px]">
        <SelectValue placeholder="Language" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="mango">JavaScript</SelectItem>
          <SelectItem value="apple">C++</SelectItem>
          <SelectItem value="banana">Java</SelectItem>
          <SelectItem value="blueberry">PHP</SelectItem>
          <SelectItem value="grapes">Swift</SelectItem>
          <SelectItem value="pineapple">Python</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}

export default SelectBtn