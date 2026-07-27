(function registerIndonesianLocale() {
  if (!window.CMS) return;

  const id = {
    auth: {
      login: "Masuk",
      loggingIn: "Sedang masuk...",
      loginWithNetlifyIdentity: "Masuk dengan Netlify Identity",
      loginWithAzure: "Masuk dengan Azure",
      loginWithBitbucket: "Masuk dengan Bitbucket",
      loginWithGitHub: "Masuk dengan GitHub",
      loginWithGitLab: "Masuk dengan GitLab",
      loginWithGitea: "Masuk dengan Gitea",
      loginWithForgejo: "Masuk dengan Forgejo",
      errors: {
        email: "Masukkan alamat email.",
        password: "Masukkan kata sandi.",
        identitySettings: "Pengaturan Identity tidak dapat diakses. Untuk git-gateway, aktifkan layanan Identity dan Git Gateway.",
      },
    },
    app: {
      header: {
        content: "Konten",
        workflow: "Alur Rilis",
        media: "Media",
        quickAdd: "Tambah Cepat",
      },
      app: {
        errorHeader: "Konfigurasi CMS gagal dimuat",
        configErrors: "Kesalahan Konfigurasi",
        checkConfigYml: "Periksa berkas config.yml.",
        loadingConfig: "Memuat konfigurasi...",
        waitingBackend: "Menunggu backend...",
      },
      notFoundPage: { header: "Tidak Ditemukan" },
    },
    collection: {
      sidebar: {
        collections: "Koleksi",
        allCollections: "Semua Koleksi",
        searchAll: "Cari semua",
        searchIn: "Cari di",
      },
      collectionTop: {
        sortBy: "Urutkan berdasarkan",
        viewAs: "Tampilan",
        viewAsList: "Tampilan daftar",
        viewAsGrid: "Tampilan grid",
        newButton: "＋ %{collectionLabel}",
        newButtonAriaLabel: "Buat entri %{collectionLabel}",
        ascending: "Naik",
        descending: "Turun",
        searchResults: "Hasil pencarian untuk \"%{searchTerm}\"",
        searchResultsInCollection: "Hasil pencarian untuk \"%{searchTerm}\" di %{collection}",
        filterBy: "Filter berdasarkan",
        groupBy: "Kelompokkan berdasarkan",
      },
      entries: {
        loadingEntries: "Memuat entri...",
        cachingEntries: "Menyimpan cache entri...",
        longerLoading: "Proses ini mungkin memerlukan beberapa menit",
        noEntries: "Belum ada entri",
        unpublishedHeader: "Entri Belum Terbit",
      },
      groups: {
        other: "Lainnya",
        negateLabel: "Bukan %{label}",
      },
      defaultFields: {
        author: { label: "Penulis" },
        updatedOn: { label: "Diperbarui Pada" },
      },
    },
    editor: {
      editorControl: {
        field: {
          optional: "opsional",
          widgetLabel: "kolom %{widgetLabel}",
        },
      },
      editorControlPane: {
        widget: {
          required: "%{fieldLabel} wajib diisi.",
          regexPattern: "%{fieldLabel} tidak sesuai dengan pola: %{pattern}.",
          processing: "%{fieldLabel} sedang diproses.",
          range: "%{fieldLabel} harus berada di antara %{minValue} dan %{maxValue}.",
          min: "%{fieldLabel} minimal %{minValue}.",
          max: "%{fieldLabel} maksimal %{maxValue}.",
          rangeCount: "%{fieldLabel} harus memiliki %{minCount} sampai %{maxCount} item.",
          rangeCountExact: "%{fieldLabel} harus memiliki tepat %{count} item.",
          rangeMin: "%{fieldLabel} minimal memiliki %{minCount} item.",
          rangeMax: "%{fieldLabel} maksimal memiliki %{maxCount} item.",
          invalidPath: "'%{path}' bukan path yang valid",
          pathExists: "Path '%{path}' sudah ada",
        },
        i18n: {
          writingInLocale: "Menulis dalam %{locale}",
          copyFromLocale: "Isi dari bahasa lain",
          copyFromLocaleConfirm: "Isi data dari bahasa %{locale}?\nSeluruh konten yang ada akan ditimpa.",
        },
      },
      editor: {
        onLeavePage: "Yakin ingin meninggalkan halaman ini?",
        onUpdatingWithUnsavedChanges: "Ada perubahan yang belum disimpan. Simpan sebelum memperbarui status.",
        onPublishingNotReady: "Ubah status menjadi Siap sebelum menerbitkan.",
        onPublishingWithUnsavedChanges: "Ada perubahan yang belum disimpan. Simpan sebelum menerbitkan.",
        onPublishing: "Yakin ingin menerbitkan entri ini?",
        onUnpublishing: "Yakin ingin membatalkan penerbitan entri ini?",
        onDeleteWithUnsavedChanges: "Yakin ingin menghapus entri terbit ini beserta perubahan yang belum disimpan?",
        onDeletePublishedEntry: "Yakin ingin menghapus entri terbit ini?",
        onDeleteUnpublishedChangesWithUnsavedChanges: "Semua perubahan belum terbit dan perubahan sesi ini akan dihapus. Lanjutkan?",
        onDeleteUnpublishedChanges: "Semua perubahan belum terbit akan dihapus. Lanjutkan?",
        loadingEntry: "Memuat entri...",
        confirmLoadBackup: "Cadangan lokal ditemukan untuk entri ini. Gunakan cadangan tersebut?",
      },
      editorInterface: {
        toggleI18n: "Ubah tampilan bahasa",
        togglePreview: "Ubah tampilan pratinjau",
        toggleScrollSync: "Sinkronkan gulir",
        toggleNotes: "Ubah tampilan catatan",
      },
      editorNotesPane: {
        title: "Catatan",
        emptyState: "Belum ada catatan. Tambahkan catatan pertama untuk mulai berkolaborasi.",
        addNote: "Tambah Catatan",
        addPlaceholder: "Tambahkan catatan...",
        editPlaceholder: "Ubah catatan...",
        save: "Simpan",
        cancel: "Batal",
        edit: "Ubah",
        delete: "Hapus",
        resolve: "Selesaikan",
        unresolve: "Buka Kembali",
        confirmDelete: "Yakin ingin menghapus catatan ini?",
        shortcut: "Tips: Tekan Ctrl+Enter untuk menambah catatan dengan cepat",
      },
      editorToolbar: {
        publishing: "Sedang menerbitkan...",
        publish: "Terbitkan",
        published: "Terbit",
        unpublish: "Batalkan Terbit",
        duplicate: "Duplikat",
        unpublishing: "Sedang membatalkan penerbitan...",
        publishAndCreateNew: "Terbitkan dan Buat Baru",
        publishAndDuplicate: "Terbitkan dan Duplikat",
        deleteUnpublishedChanges: "Hapus Perubahan Belum Terbit",
        deleteUnpublishedEntry: "Hapus Entri Belum Terbit",
        deletePublishedEntry: "Hapus Entri Terbit",
        deleteEntry: "Hapus Entri",
        saving: "Menyimpan...",
        save: "Simpan",
        statusInfoTooltipDraft: "Status entri masih draf. Untuk mengirimkannya ke peninjauan, ubah status menjadi Dalam Review.",
        statusInfoTooltipInReview: "Entri sedang ditinjau. Anda masih dapat membuat perubahan tambahan.",
        deleting: "Menghapus...",
        updating: "Memperbarui...",
        status: "Status: %{status}",
        backCollection: " Menulis di koleksi %{collectionLabel}",
        unsavedChanges: "Perubahan Belum Disimpan",
        changesSaved: "Perubahan tersimpan",
        draft: "Draf",
        inReview: "Dalam Review",
        ready: "Siap",
        publishNow: "Terbitkan Sekarang",
        deployPreviewPendingButtonLabel: "Periksa Pratinjau",
        deployPreviewButtonLabel: "Lihat Pratinjau",
        deployButtonLabel: "Lihat Situs Publik",
      },
      editorWidgets: {
        markdown: {
          bold: "Tebal",
          italic: "Miring",
          strikethrough: "Coret",
          code: "Kode",
          link: "Tautan",
          linkPrompt: "Masukkan URL tautan",
          headings: "Judul",
          quote: "Kutipan",
          bulletedList: "Daftar Berpoin",
          numberedList: "Daftar Bernomor",
          addComponent: "Tambah Komponen",
          richText: "Teks Kaya",
          markdown: "Markdown",
          toggleMode: {
            rich: "Ubah ke mode teks kaya",
            markdown: "Ubah ke mode Markdown",
          },
        },
        image: {
          choose: "Pilih gambar",
          chooseMultiple: "Pilih beberapa gambar",
          chooseUrl: "Masukkan dari URL",
          replaceUrl: "Ganti dengan URL",
          promptUrl: "Masukkan URL gambar",
          chooseDifferent: "Pilih gambar lain",
          addMore: "Tambah gambar",
          remove: "Hapus gambar",
          removeAll: "Hapus semua gambar",
        },
        file: {
          choose: "Pilih berkas",
          chooseUrl: "Masukkan dari URL",
          chooseMultiple: "Pilih beberapa berkas",
          replaceUrl: "Ganti dengan URL",
          promptUrl: "Masukkan URL berkas",
          chooseDifferent: "Pilih berkas lain",
          addMore: "Tambah berkas",
          remove: "Hapus berkas",
          removeAll: "Hapus semua berkas",
        },
        unknownControl: { noControl: "Tidak ada kontrol untuk widget '%{widget}'." },
        unknownPreview: { noPreview: "Tidak ada pratinjau untuk widget '%{widget}'." },
        headingOptions: {
          headingOne: "Judul 1",
          headingTwo: "Judul 2",
          headingThree: "Judul 3",
          headingFour: "Judul 4",
          headingFive: "Judul 5",
          headingSix: "Judul 6",
        },
        datetime: {
          now: "Sekarang",
          clear: "Kosongkan",
          setToNow: "Atur %{fieldLabel} ke waktu sekarang",
        },
        list: {
          add: "Tambah %{item}",
          addType: "Tambah %{item}",
        },
        object: {
          expand: "Buka",
          collapse: "Tutup",
        },
      },
    },
    mediaLibrary: {
      mediaLibraryCard: {
        draft: "Draf",
        copy: "Salin",
        copyUrl: "Salin URL",
        copyPath: "Salin Path",
        copyName: "Salin Nama",
        copied: "Tersalin",
      },
      mediaLibrary: {
        onDelete: "Yakin ingin menghapus media yang dipilih?",
        fileTooLarge: "Berkas terlalu besar. Ukuran maksimal yang diizinkan adalah %{size} kB.",
      },
      mediaLibraryModal: {
        loading: "Memuat...",
        close: "Tutup",
        noResults: "Tidak ada hasil.",
        noAssetsFound: "Tidak ada aset.",
        noImagesFound: "Tidak ada gambar.",
        private: "Pribadi ",
        images: "Gambar",
        mediaAssets: "Aset Media",
        search: "Cari...",
        uploading: "Mengunggah...",
        upload: "Unggah",
        download: "Unduh",
        deleting: "Menghapus...",
        deleteSelected: "Hapus yang Dipilih",
        chooseSelected: "Pilih yang Dipilih",
      },
    },
    ui: {
      default: { goBackToSite: "Kembali ke situs" },
      errorBoundary: {
        title: "Kesalahan",
        details: "Terjadi kesalahan - silakan ",
        reportIt: "laporkan isu di GitHub.",
        detailsHeading: "Rincian",
        privacyWarning: "Pelaporan isu akan menyertakan pesan kesalahan dan data debug. Periksa dan hapus data sensitif terlebih dahulu.",
        recoveredEntry: {
          heading: "Dokumen dipulihkan",
          warning: "Salin konten ini sebelum berpindah halaman.",
          copyButtonLabel: "Salin ke clipboard",
        },
      },
      settingsDropdown: {
        logOut: "Keluar",
        account: "Menu opsi akun",
      },
      toast: {
        onFailToLoadEntries: "Gagal memuat entri: %{details}",
        onFailToLoadDeployPreview: "Gagal memuat pratinjau: %{details}",
        onFailToPersist: "Gagal menyimpan entri: %{details}",
        onFailToDelete: "Gagal menghapus entri: %{details}",
        onFailToUpdateStatus: "Gagal memperbarui status: %{details}",
        missingRequiredField: "Ada kolom wajib yang belum diisi. Lengkapi sebelum menyimpan.",
        entrySaved: "Entri tersimpan",
        entryPublished: "Entri diterbitkan",
        entryUnpublished: "Penerbitan entri dibatalkan",
        onFailToPublishEntry: "Gagal menerbitkan: %{details}",
        onFailToUnpublishEntry: "Gagal membatalkan penerbitan: %{details}",
        entryUpdated: "Status entri diperbarui",
        onDeleteUnpublishedChanges: "Perubahan belum terbit dihapus",
        noteAdded: "Catatan ditambahkan",
        onFailToAddNote: "Gagal menambah catatan: %{details}",
        noteUpdated: "Catatan diperbarui",
        onFailToUpdateNote: "Gagal memperbarui catatan: %{details}",
        noteDeleted: "Catatan dihapus",
        onFailToDeleteNote: "Gagal menghapus catatan: %{details}",
        noteResolved: "Catatan diselesaikan",
        noteReopened: "Catatan dibuka kembali",
        onFailToToggleNote: "Gagal memperbarui status catatan: %{details}",
        onFailToAuth: "%{details}",
        onLoggedOut: "Anda telah keluar. Cadangkan data lalu masuk kembali.",
        onBackendDown: "Layanan backend sedang bermasalah. Lihat %{details} untuk informasi lebih lanjut.",
      },
    },
    workflow: {
      workflow: {
        loading: "Memuat entri alur rilis",
        workflowHeading: "Alur Rilis",
        newPost: "Entri Baru",
        description: "%{smart_count} entri menunggu peninjauan, %{readyCount} siap diterbitkan. |||| %{smart_count} entri menunggu peninjauan, %{readyCount} siap diterbitkan.",
        dateFormat: "D MMMM",
      },
      workflowCard: {
        lastChange: "%{date} oleh %{author}",
        lastChangeNoAuthor: "%{date}",
        lastChangeNoDate: "oleh %{author}",
        deleteChanges: "Hapus perubahan",
        deleteNewEntry: "Hapus entri baru",
        publishChanges: "Terbitkan perubahan",
        publishNewEntry: "Terbitkan entri baru",
      },
      workflowList: {
        onDeleteEntry: "Yakin ingin menghapus entri ini?",
        onPublishingNotReadyEntry: "Hanya item berstatus Siap yang dapat diterbitkan. Pindahkan kartu ke kolom Siap.",
        onPublishEntry: "Yakin ingin menerbitkan entri ini?",
        draftHeader: "Draf",
        inReviewHeader: "Dalam Review",
        readyHeader: "Siap",
        currentEntries: "%{smart_count} entri |||| %{smart_count} entri",
      },
    },
  };

  id.collection.collectionTop.newButton = "+ %{collectionLabel}";
  window.CMS.registerLocale("id", id);
  document.documentElement.lang = "id";

  const fallback = new Map([
    ["Content", "Konten"],
    ["Contents", "Konten"],
    ["Workflow", "Alur Rilis"],
    ["Collections", "Koleksi"],
    ["All Collections", "Semua Koleksi"],
    ["Media", "Media"],
    ["Quick add", "Tambah Cepat"],
    ["Login", "Masuk"],
    ["Login with Netlify Identity", "Masuk dengan Netlify Identity"],
    ["Sort by", "Urutkan berdasarkan"],
    ["View", "Tampilan"],
    ["List", "Daftar"],
    ["Grid", "Grid"],
    ["New", "Baru"],
    ["? %{collectionLabel}", "+ %{collectionLabel}"],
    ["Search", "Cari"],
    ["Filter by", "Filter berdasarkan"],
    ["Group by", "Kelompokkan berdasarkan"],
    ["No entries", "Belum ada entri"],
    ["Save", "Simpan"],
    ["Save draft", "Simpan draf"],
    ["Publish", "Terbitkan"],
    ["Published", "Terbit"],
    ["Draft", "Draf"],
    ["Ready", "Siap"],
    ["Review", "Tinjau"],
    ["Preview", "Pratinjau"],
    ["Notes", "Catatan"],
    ["Settings", "Pengaturan"],
    ["Log out", "Keluar"],
    ["Delete", "Hapus"],
    ["Cancel", "Batal"],
    ["Close", "Tutup"],
    ["Add", "Tambah"],
    ["Remove", "Hapus"],
    ["Upload", "Unggah"],
    ["Choose", "Pilih"],
    ["Clear", "Kosongkan"],
    ["Loading...", "Memuat..."],
    ["Search...", "Cari..."],
  ]);

  function translateElement(element) {
    if (!(element instanceof Element) || element.closest("script, style")) return;

    ["title", "placeholder", "aria-label"].forEach((attribute) => {
      const value = element.getAttribute(attribute);
      if (value && fallback.has(value)) element.setAttribute(attribute, fallback.get(value));
    });

    Array.from(element.childNodes).forEach((node) => {
      if (node.nodeType !== Node.TEXT_NODE) return;
      const original = node.textContent;
      const trimmed = original.trim();
      if (!trimmed || !fallback.has(trimmed)) return;
      node.textContent = original.replace(trimmed, fallback.get(trimmed));
    });
  }

  const observer = new MutationObserver((records) => {
    records.forEach((record) => {
      record.addedNodes.forEach((node) => {
        if (node.nodeType === Node.ELEMENT_NODE) {
          translateElement(node);
          node.querySelectorAll?.("*").forEach(translateElement);
        }
      });
    });
  });

  observer.observe(document.documentElement, { childList: true, subtree: true });
  translateElement(document.body);
})();
