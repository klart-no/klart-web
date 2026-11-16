// Felt for å velge filer (bilder eller video). Selve opplastingen kobles på med Supabase.
import { uploadClass } from "@/components/ui/formStyles";

export default function UploadField(props: {
  label: string;
  hint: string;
  accept: string;
  multiple?: boolean;
  onFiles: (files: FileList) => void;
}) {
  return (
    <div className="space-y-1.5">
      <p className="text-sm font-medium text-stone-700">{props.label}</p>
      <label className={uploadClass}>
        <span>{props.hint}</span>
        <input
          type="file"
          accept={props.accept}
          multiple={props.multiple}
          className="sr-only"
          onChange={(e) => e.target.files && props.onFiles(e.target.files)}
        />
      </label>
    </div>
  );
}
