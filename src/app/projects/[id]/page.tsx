import { Button } from "@/components/ui/button";
import Container from "@/components/myUi/Container";
export default function MaintenanceError() {
  return (
    <Container className="h-svh">
      <div className="m-auto flex h-full w-full flex-col items-center justify-center gap-2">
        <h1 className="text-[7rem] font-bold leading-tight">503</h1>
        <span className="font-medium">Page is under Development!</span>
        <p className="text-center text-muted-foreground">
          The Page is not available at the moment. <br />
          It'll be available online shortly.
        </p>
        <div className="mt-6 flex gap-4">
          <Button variant="outline">Learn more</Button>
        </div>
      </div>
    </Container>
  );
}
