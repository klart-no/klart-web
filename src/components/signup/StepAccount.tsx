import { fieldClass, labelClass } from "@/components/ui/formStyles";

// Steg 1: opprett bruker. Selve innloggingen kobles på når Supabase er på plass.
export default function StepAccount() {
  return (
    <>
      <button
        type="button"
        className="w-full rounded-lg border border-stone-300 bg-white py-3 font-semibold hover:bg-stone-50"
      >
        Fortsett med Google
      </button>
      <p className="text-center text-sm text-stone-500">eller med e-post</p>
      <label className={labelClass}>
        E-post
        <input
          type="email"
          name="email"
          placeholder="navn@eksempel.no"
          className={fieldClass}
        />
      </label>
      <label className={labelClass}>
        Passord
        <input type="password" name="password" className={fieldClass} />
      </label>
      <label className="flex items-start gap-3 text-sm text-stone-700">
        <input type="checkbox" name="terms" className="mt-0.5 h-5 w-5" />
        Jeg godtar vilkårene og at profilen min vises offentlig på
        NordicOccasions
      </label>
    </>
  );
}
