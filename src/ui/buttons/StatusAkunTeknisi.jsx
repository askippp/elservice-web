export default function StatusAkunTeknisi({ hasAccount = false, onClick }) {
  return (
    <button
      onClick={onClick}
      className="flex-1 py-2.5 px-4 bg-white border-2 border-purple-500 text-purple-600 text-sm font-semibold rounded-lg hover:bg-purple-50 transition-colors flex items-center justify-center gap-2"
    >
      {hasAccount ? (
        // Icon untuk "Lihat Akun" dengan ceklis
        <>
          <div className="relative">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
            <svg className="w-3 h-3 absolute -top-1 -right-1 text-green-500 bg-white rounded-full" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
          </div>
          Lihat Akun
        </>
      ) : (
        // Icon untuk "Buat Akun" (user plus)
        <>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
          </svg>
          Buat Akun
        </>
      )}
    </button>
  );
}