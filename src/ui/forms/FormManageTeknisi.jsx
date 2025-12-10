import { useState } from 'react';
import DeleteTeknisi from '../buttons/DeleteTeknisi';
import UpdateTeknisiLaporan from '../buttons/UpdateTeknisiLaporan';
import AddLaporanTeknisi from './AddLaporanTeknisi';
import NotifAddLaporanTeknisi from '../notif/notifAddLaporanTeknisi';

export default function FormManageTeknisi({ onClose }) {
  const [teknisiList, setTeknisiList] = useState([
    {
      id: 1,
      name: 'Ahmad Fauzi',
      specialization: 'AC & Kulkas',
      email: 'ahmad@email.com',
      phone: '081234567892'
    },
    {
      id: 2,
      name: 'Rizky Pratama',
      specialization: 'Mesin Cuci',
      email: 'rizky@email.com',
      phone: '081234567893'
    }
  ]);

  const [showAddForm, setShowAddForm] = useState(false);
  const [showNotif, setShowNotif] = useState(false);

  const handleUpdateTeknisi = () => {
    // Callback untuk refresh data setelah update
    console.log('Teknisi updated, refreshing data...');
    // Di sini bisa tambahkan logic untuk fetch ulang data dari API
  };

  const handleDeleteTeknisi = (teknisiId) => {
    // Filter out the deleted teknisi
    setTeknisiList(teknisiList.filter(teknisi => teknisi.id !== teknisiId));
  };

  const handleAddTeknisi = (newTeknisi) => {
    // Tambahkan teknisi baru ke list
    const teknisiWithId = {
      ...newTeknisi,
      id: teknisiList.length > 0 ? Math.max(...teknisiList.map(t => t.id)) + 1 : 1
    };
    setTeknisiList([...teknisiList, teknisiWithId]);
    setShowAddForm(false);
    
    // Tampilkan notifikasi
    setShowNotif(true);
  };

  const handleCloseAddForm = () => {
    setShowAddForm(false);
  };

  const handleCloseNotif = () => {
    setShowNotif(false);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-hidden flex flex-col relative">
        {/* Header */}
        <div className="p-8 border-b">
          <h2 className="text-3xl font-bold text-gray-900">Manage Teknisi</h2>
        </div>

        {/* Content - Scrollable */}
        <div className="flex-1 overflow-y-auto p-8">
          <div className="space-y-4">
            {teknisiList.map((teknisi) => (
              <div 
                key={teknisi.id}
                className="border-2 border-gray-300 rounded-2xl p-6 hover:border-gray-400 transition-colors"
              >
                <div className="flex items-center gap-4">
                  {/* Avatar */}
                  <div className="w-16 h-16 bg-blue-200 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                    </svg>
                  </div>

                  {/* Info */}
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900">{teknisi.name}</h3>
                    <p className="text-sm text-gray-700">Spesialisasi: {teknisi.specialization}</p>
                    <p className="text-sm text-gray-700">{teknisi.email} • {teknisi.phone}</p>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2 flex-shrink-0">
                    {/* Edit Button - Using UpdateTeknisiLaporan Component */}
                    <UpdateTeknisiLaporan
                      teknisi={teknisi}
                      onUpdate={handleUpdateTeknisi}
                    />

                    {/* Delete Button - Using DeleteTeknisi Component */}
                    <DeleteTeknisi
                      teknisiId={teknisi.id}
                      teknisiName={teknisi.name}
                      onDelete={handleDeleteTeknisi}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer with Add Button */}
        <div className="p-8 border-t">
          <button
            onClick={() => setShowAddForm(true)}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 rounded-2xl transition-colors"
          >
            Tambah Teknisi Baru
          </button>
        </div>

        {/* Close Button (X) - Main Modal */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 w-10 h-10 bg-gray-200 hover:bg-gray-300 rounded-full flex items-center justify-center transition-colors z-10"
        >
          <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      {/* Add Teknisi Form Modal */}
      {showAddForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[60] p-4">
          <div className="relative">
            <AddLaporanTeknisi
              onClose={handleCloseAddForm}
              onAdd={handleAddTeknisi}
            />
            
            {/* Close Button (X) - Add Form Modal */}
            <button
              onClick={handleCloseAddForm}
              className="absolute top-6 right-6 w-10 h-10 bg-gray-200 hover:bg-gray-300 rounded-full flex items-center justify-center transition-colors z-10"
            >
              <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}

      {/* Notifikasi Success */}
      {showNotif && (
        <NotifAddLaporanTeknisi onClose={handleCloseNotif} />
      )}
    </div>
  );
}