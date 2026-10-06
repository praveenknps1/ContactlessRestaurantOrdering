import { FaMinus, FaPlus } from "react-icons/fa";
import { focusRing } from "../utils/ui";

const stepBtn = `grid size-8 cursor-pointer place-items-center rounded-full bg-accent text-[0.68rem] text-white transition duration-150 hover:scale-110 hover:brightness-110 ${focusRing}`;

// Small  - [ 2 ] +  quantity control used on dish cards and in the cart.
export default function Stepper({ qty, label, onMinus, onPlus }) {
  return (
    <div
      className="inline-flex items-center gap-1 rounded-full border border-line bg-sage-soft p-[3px]"
      role="group"
      aria-label={`Quantity of ${label}`}
    >
      <button type="button" className={stepBtn} aria-label="Remove one" onClick={onMinus}>
        <FaMinus />
      </button>
      <span className="min-w-7 text-center font-semibold text-ink">{qty}</span>
      <button type="button" className={stepBtn} aria-label="Add one" onClick={onPlus}>
        <FaPlus />
      </button>
    </div>
  );
}
