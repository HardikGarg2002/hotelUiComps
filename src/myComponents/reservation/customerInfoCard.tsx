import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { IoCall } from "react-icons/io5";
import { Button } from "@/components/ui/button";
import { MdEmail } from "react-icons/md";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

function CustomerInfoCard() {
  return (
    <div className="flex justify-between p-4 flex-col">
      <div className="flex items-center space-x-4">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div>
          <h2 className="text-gray-800 text-xl font-semibold">Jane Cooper</h2>
          <p className="text-gray-600 tracking-tight text-sm">
            Nevaeh.Simmons@Example.Com
          </p>
          <p className="text-gray-600">(270) 555-0117</p>
        </div>
      </div>
      <div className="flex justify-evenly space-x-2">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline">
                <IoCall className="mr-2" /> Call
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>+91 9215503085</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button>
                <MdEmail className="mr-2" /> Email
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>hardikgarg3085@gmail.com</p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </div>
  );
}

export default CustomerInfoCard;
