import { Button } from "@/components/ui/button";
import { CoolMode } from "@/components/magicui/cool-mode";

export function CoolModeBuuton() {
  return (
    <div className="relative justify-center">
      <CoolMode>
        <Button variant="ghost">Windows Comming Soon</Button>
      </CoolMode>
    </div>
  );
}
