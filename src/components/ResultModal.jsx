export default function ResultModal({result, targetTime}) {
    return <dialog className="result-modal" open>
        <h2> You {result}</h2>
        <p>The target time was <strong>{targetTime}</strong></p>
        <p>You stopped the timer with x seconds left.</p>
        <form method="dialog">
            <button>close</button>
        </form>
    </dialog>
}