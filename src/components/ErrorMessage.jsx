function ErrorMessage({ message, onRetry }) {
  return (
    <div className="error" role="alert">
      <p>{message}</p>
      <button type="button" onClick={onRetry}>
        Try again
      </button>
    </div>
  )
}

export default ErrorMessage
