import { redirect } from "next/navigation";

// /utstyr har ingen egen side ennå – send videre til første underkategori.
export default function Page() {
  redirect("/utstyr/fotoboks");
}
