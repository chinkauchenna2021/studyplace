import React from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from '@/components/ui/button';
import { ScrollArea } from "@/components/ui/scroll-area"


function ModalBox() {
  return (
    <AlertDialog >
      <AlertDialogTrigger><Button variant="outline" size="sm">Font</Button></AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Change Editor Font-Size</AlertDialogTitle>
          <AlertDialogDescription>
            <ScrollArea className="h-[200px] w-full rounded-md border p-4">
                Jokester began sneaking into the castle in the middle of the night and leaving
                jokes all over the place: under the king's pillow, in his soup, even in the
                royal toilet. The king was furious, but he couldn't seem to stop Jokester. And
                then, one day, the people of the kingdom discovered that the jokes left by
                Jokester were so funny that they couldn't help but laugh. And once they
                started laughing, they couldn't stop.
          </ScrollArea>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export default ModalBox;
