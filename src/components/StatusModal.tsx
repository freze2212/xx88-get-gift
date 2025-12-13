type StatusModalProps = {
  type: 'success' | 'error'
  message: string
  onClose: () => void
}

function StatusModal({ type, message, onClose }: StatusModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4">
      <div className="relative w-full max-w-[360px] rounded-[32px] bg-white px-8 pt-14 pb-8 text-center shadow-[0_24px_70px_rgba(8,32,71,0.4)]">
        <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
          <img
            src={type === 'success' ? '/succes.png' : '/failed.png'}
            alt={type === 'success' ? 'Thành công' : 'Thất bại'}
            className="h-auto w-[110px] object-contain"
          />
        </div>
        <p className="mt-2 text-[18px] font-semibold leading-relaxed text-[#1f2431]">{message}</p>
        <button
          type="button"
          onClick={onClose}
          className="mt-3 w-full rounded-full bg-gradient-to-b from-[rgba(0,174,238,0.2)] to-[#00aeee] py-3 text-[16px] font-semibold text-[#fff]"
        >
          Xác Nhận
        </button>
      </div>
    </div>
  )
}

export default StatusModal

