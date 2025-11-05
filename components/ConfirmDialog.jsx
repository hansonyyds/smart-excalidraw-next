export default function ConfirmDialog({
  isOpen,
  onClose,
  onConfirm,
  title = '确认操作',
  message,
  confirmText = '确认',
  cancelText = '取消',
  type = 'warning'
}) {
  if (!isOpen) return null;

  const typeStyles = {
    warning: {
      container: 'bg-yellow-50 border-yellow-200',
      title: 'text-yellow-800',
      message: 'text-yellow-700',
      confirmButton: 'bg-yellow-600 hover:bg-yellow-700 text-white'
    },
    danger: {
      container: 'bg-red-50 border-red-200',
      title: 'text-red-800',
      message: 'text-red-700',
      confirmButton: 'bg-red-600 hover:bg-red-700 text-white'
    },
    info: {
      container: 'bg-blue-50 border-blue-200',
      title: 'text-blue-800',
      message: 'text-blue-700',
      confirmButton: 'bg-blue-600 hover:bg-blue-700 text-white'
    }
  };

  const styles = typeStyles[type] || typeStyles.warning;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50"
        onClick={onClose}
      />

      {/* Dialog Content */}
      <div className="relative bg-white rounded-lg border border-gray-300 w-full max-w-md mx-4 shadow-xl">
        {/* Header */}
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className={`text-lg font-semibold ${styles.title}`}>
            {title}
          </h2>
        </div>

        {/* Body */}
        <div className="px-6 py-4">
          <p className={`text-sm ${styles.message}`}>
            {message}
          </p>
        </div>

        {/* Footer */}
        <div className="flex justify-end space-x-3 px-6 py-4 border-t border-gray-200">
          <button
            onClick={onClose}
            className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            {cancelText}
          </button>
          <button
            onClick={onConfirm}
            className={`px-4 py-2 text-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 ${styles.confirmButton}`}
          >
            {confirmText}
          </button>
        </div>
      </div>
    </div>
  );
}