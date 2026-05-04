/* =========================================================
   PDP Permessi - Dataset condiviso per i prototipi
   =========================================================
   Contiene dipendenti (con ruolo applicativo), causali e
   richieste di esempio usate da tutte le pagine del prototipo.
   Nel sistema vero questi dati verranno dal DB via Laravel.
   ========================================================= */

(function () {
  const ANNO = new Date().getFullYear();

  // =========================================================
  // Utenti del sistema (corrispondono alla tabella users)
  // =========================================================
  // Tutti gli utenti sono "dipendenti" dell'azienda, ma hanno
  // un ruolo applicativo che determina cosa possono fare
  // nella piattaforma.
  window.DIPENDENTI_DEMO = [
    // Dipendenti "semplici"
    { id: 1,  nome: 'Mario Rossi',    email: 'm.rossi@pdpboxdoccia.com',    reparto: 'Produzione',      ruolo: 'dipendente'     },
    { id: 2,  nome: 'Anna Verdi',     email: 'a.verdi@pdpboxdoccia.com',    reparto: 'Amministrazione', ruolo: 'dipendente'     },
    { id: 3,  nome: 'Paolo Russo',    email: 'p.russo@pdpboxdoccia.com',    reparto: 'Produzione',      ruolo: 'dipendente'     },
    { id: 4,  nome: 'Laura Ferrari',  email: 'l.ferrari@pdpboxdoccia.com',  reparto: 'Logistica',       ruolo: 'dipendente'     },
    { id: 5,  nome: 'Marco Ricci',    email: 'm.ricci@pdpboxdoccia.com',    reparto: 'Produzione',      ruolo: 'dipendente'     },
    { id: 6,  nome: 'Silvia Conti',   email: 's.conti@pdpboxdoccia.com',    reparto: 'Logistica',       ruolo: 'dipendente'     },

    // Utenti con ruoli applicativi superiori
    { id: 10, nome: 'Luca Bianchi',   email: 'l.bianchi@pdpboxdoccia.com',  reparto: 'Produzione',      ruolo: 'direttore'      },
    { id: 11, nome: 'Giulia Neri',    email: 'g.neri@pdpboxdoccia.com',     reparto: 'Amministrazione', ruolo: 'amministrazione' },
    { id: 12, nome: 'Sandro Costa',   email: 's.costa@pdpboxdoccia.com',    reparto: 'Sistemi',         ruolo: 'supervisore'    },
  ];


  // Reparti con direttore assegnato
  window.REPARTI_DEMO = [
    { id: 1, codice: 'PROD', descrizione: 'Produzione', direttore_id: 10 },
    { id: 2, codice: 'AMM',  descrizione: 'Amministrazione', direttore_id: 10 },
    { id: 3, codice: 'LOG',  descrizione: 'Logistica', direttore_id: 10 },
    { id: 4, codice: 'SIS',  descrizione: 'Sistemi', direttore_id: null },
  ];

  // Lookup per id
  window.getDipendente = function (id) {
    return window.DIPENDENTI_DEMO.find(d => d.id === id) || null;
  };

  // Lookup per email (case-insensitive)
  window.getDipendenteByEmail = function (email) {
    if (!email) return null;
    const e = email.trim().toLowerCase();
    return window.DIPENDENTI_DEMO.find(d => d.email.toLowerCase() === e) || null;
  };

  // Causali usate dal direttore nelle decisioni
  window.CAUSALI_DEMO = {
    approvazione: [
      'Compatibile con pianificazione',
      'Sostituzione disponibile',
      'Urgenza riconosciuta',
    ],
    rifiuto: [
      'Incompatibile con pianificazione',
      'Personale insufficiente',
      'Richiesta incompleta',
      'Preavviso non sufficiente',
    ],
  };

  // =========================================================
  // Richieste
  // =========================================================
  window.RICHIESTE_DEMO = [
    // --- Richieste di Mario Rossi (dipendente_id: 1) ---
    {
      id: 42, dipendente_id: 1,
      stato: 'lavorata',
      data_creazione: `${ANNO}-01-08`, ora_creazione: '10:15',
      motivazione: 'Permesso personale',
      data_inizio: `${ANNO}-01-15`,
      data_fine: `${ANNO}-01-15`,
      tipo: 'giornata_intera', ora_inizio: null, ora_fine: null, durata: 8,
      urgente: false, note: '',
      decisione: {
        esito: 'approvata', direttore: 'Luca Bianchi',
        causale: 'Compatibile con pianificazione', note: '',
        data: `${ANNO}-01-09`, ora: '08:30',
      },
      lavorazione: {
        operatore: 'Giulia Neri', esito_marcatempo: 'confermata',
        note: '', data: `${ANNO}-01-16`, ora: '09:00',
      },
    },
    {
      id: 43, dipendente_id: 1,
      stato: 'lavorata',
      data_creazione: `${ANNO}-01-25`, ora_creazione: '11:40',
      motivazione: 'Donazione sangue',
      data_inizio: `${ANNO}-02-03`,
      data_fine: `${ANNO}-02-03`,
      tipo: 'giornata_intera', ora_inizio: null, ora_fine: null, durata: 8,
      urgente: false, note: 'Prelievo AVIS presso ospedale.',
      decisione: {
        esito: 'approvata', direttore: 'Luca Bianchi',
        causale: 'Compatibile con pianificazione', note: '',
        data: `${ANNO}-01-26`, ora: '14:20',
      },
      lavorazione: {
        operatore: 'Giulia Neri', esito_marcatempo: 'confermata',
        note: '', data: `${ANNO}-02-04`, ora: '08:45',
      },
    },
    {
      id: 44, dipendente_id: 1,
      stato: 'lavorata',
      data_creazione: `${ANNO}-02-12`, ora_creazione: '09:00',
      motivazione: 'Legge 104',
      data_inizio: `${ANNO}-02-20`,
      data_fine: `${ANNO}-02-20`,
      tipo: 'permesso_orario', ora_inizio: '09:00', ora_fine: '12:00', durata: 3,
      urgente: false, note: '',
      decisione: {
        esito: 'approvata', direttore: 'Luca Bianchi',
        causale: 'Compatibile con pianificazione', note: '',
        data: `${ANNO}-02-13`, ora: '16:45',
      },
      lavorazione: {
        operatore: 'Giulia Neri', esito_marcatempo: 'confermata',
        note: '', data: `${ANNO}-02-21`, ora: '08:20',
      },
    },
    {
      id: 45, dipendente_id: 1,
      stato: 'lavorata',
      data_creazione: `${ANNO}-03-07`, ora_creazione: '06:30',
      motivazione: 'Lutto',
      data_inizio: `${ANNO}-03-08`,
      data_fine: `${ANNO}-03-08`,
      tipo: 'giornata_intera', ora_inizio: null, ora_fine: null, durata: 8,
      urgente: true, note: '',
      decisione: {
        esito: 'approvata', direttore: 'Luca Bianchi',
        causale: 'Urgenza riconosciuta', note: '',
        data: `${ANNO}-03-07`, ora: '07:15',
      },
      lavorazione: {
        operatore: 'Giulia Neri', esito_marcatempo: 'confermata',
        note: '', data: `${ANNO}-03-09`, ora: '09:30',
      },
    },
    {
      id: 46, dipendente_id: 1,
      stato: 'lavorata',
      data_creazione: `${ANNO}-03-07`, ora_creazione: '06:35',
      motivazione: 'Lutto',
      data_inizio: `${ANNO}-03-09`,
      data_fine: `${ANNO}-03-09`,
      tipo: 'giornata_intera', ora_inizio: null, ora_fine: null, durata: 8,
      urgente: true, note: '',
      decisione: {
        esito: 'approvata', direttore: 'Luca Bianchi',
        causale: 'Urgenza riconosciuta', note: '',
        data: `${ANNO}-03-07`, ora: '07:15',
      },
      lavorazione: {
        operatore: 'Giulia Neri', esito_marcatempo: 'confermata',
        note: '', data: `${ANNO}-03-10`, ora: '09:30',
      },
    },
    {
      id: 47, dipendente_id: 1,
      stato: 'rifiutata',
      data_creazione: `${ANNO}-03-15`, ora_creazione: '11:05',
      motivazione: 'Permesso personale',
      data_inizio: `${ANNO}-03-22`,
      data_fine: `${ANNO}-03-22`,
      tipo: 'permesso_orario', ora_inizio: '14:00', ora_fine: '16:00', durata: 2,
      urgente: false, note: 'Commissione privata.',
      decisione: {
        esito: 'rifiutata', direttore: 'Luca Bianchi',
        causale: 'Incompatibile con pianificazione',
        note: 'Settimana di consegna ordine, impossibile sostituire.',
        data: `${ANNO}-03-16`, ora: '10:30',
      },
    },
    {
      id: 48, dipendente_id: 1,
      stato: 'lavorata',
      data_creazione: `${ANNO}-03-26`, ora_creazione: '15:00',
      motivazione: 'Legge 104',
      data_inizio: `${ANNO}-04-02`,
      data_fine: `${ANNO}-04-02`,
      tipo: 'permesso_orario', ora_inizio: '08:00', ora_fine: '12:00', durata: 4,
      urgente: false, note: '',
      decisione: {
        esito: 'approvata', direttore: 'Luca Bianchi',
        causale: 'Compatibile con pianificazione', note: '',
        data: `${ANNO}-03-27`, ora: '09:10',
      },
      lavorazione: {
        operatore: 'Giulia Neri', esito_marcatempo: 'discrepanza',
        note: 'Rientro effettivo alle 12:35 anziché 12:00. Annotata differenza di 35 minuti.',
        data: `${ANNO}-04-03`, ora: '08:30',
      },
    },
    {
      id: 49, dipendente_id: 1,
      stato: 'approvata',
      data_creazione: `${ANNO}-03-28`, ora_creazione: '14:20',
      motivazione: 'Permesso personale',
      data_inizio: `${ANNO}-04-18`,
      data_fine: `${ANNO}-04-18`,
      tipo: 'giornata_intera', ora_inizio: null, ora_fine: null, durata: 8,
      urgente: false, note: '',
      decisione: {
        esito: 'approvata', direttore: 'Luca Bianchi',
        causale: 'Compatibile con pianificazione', note: '',
        data: `${ANNO}-03-29`, ora: '09:10',
      },
    },
    {
      id: 50, dipendente_id: 1,
      stato: 'in_attesa',
      data_creazione: `${ANNO}-04-05`, ora_creazione: '13:25',
      motivazione: 'Legge 104',
      data_inizio: `${ANNO}-04-25`,
      data_fine: `${ANNO}-04-25`,
      tipo: 'permesso_orario', ora_inizio: '14:00', ora_fine: '17:00', durata: 3,
      urgente: false, note: '',
    },
    {
      id: 51, dipendente_id: 1,
      stato: 'in_attesa',
      data_creazione: `${ANNO}-04-07`, ora_creazione: '08:42',
      motivazione: 'Permesso personale',
      data_inizio: `${ANNO}-05-12`,
      data_fine: `${ANNO}-05-12`,
      tipo: 'giornata_intera', ora_inizio: null, ora_fine: null, durata: 8,
      urgente: false,
      note: 'Appuntamento in comune per pratica.',
    },
    {
      id: 52, dipendente_id: 1,
      stato: 'in_attesa',
      data_creazione: `${ANNO}-04-08`, ora_creazione: '16:15',
      motivazione: 'Donazione sangue',
      data_inizio: `${ANNO}-05-20`,
      data_fine: `${ANNO}-05-20`,
      tipo: 'giornata_intera', ora_inizio: null, ora_fine: null, durata: 8,
      urgente: false, note: '',
    },
    {
      id: 53, dipendente_id: 1,
      stato: 'annullata',
      data_creazione: `${ANNO}-01-28`, ora_creazione: '16:10',
      motivazione: 'Permesso personale',
      data_inizio: `${ANNO}-01-30`,
      data_fine: `${ANNO}-01-30`,
      tipo: 'permesso_orario', ora_inizio: '15:00', ora_fine: '17:00', durata: 2,
      urgente: false,
      note: 'Annullata perché non più necessaria.',
    },

    // --- Richieste di altri dipendenti per popolare la dashboard direttore ---
    {
      id: 60, dipendente_id: 2,
      stato: 'in_attesa',
      data_creazione: `${ANNO}-04-02`, ora_creazione: '09:15',
      motivazione: 'Legge 104',
      data_inizio: `${ANNO}-04-22`,
      data_fine: `${ANNO}-04-22`,
      tipo: 'giornata_intera', ora_inizio: null, ora_fine: null, durata: 8,
      urgente: false, note: 'Assistenza madre anziana.',
    },
    {
      id: 61, dipendente_id: 3,
      stato: 'in_attesa',
      data_creazione: `${ANNO}-04-08`, ora_creazione: '07:50',
      motivazione: 'Lutto',
      data_inizio: `${ANNO}-04-09`,
      data_fine: `${ANNO}-04-09`,
      tipo: 'giornata_intera', ora_inizio: null, ora_fine: null, durata: 8,
      urgente: true, note: 'Decesso familiare stretto.',
    },
    {
      id: 62, dipendente_id: 4,
      stato: 'in_attesa',
      data_creazione: `${ANNO}-04-06`, ora_creazione: '14:30',
      motivazione: 'Permesso personale',
      data_inizio: `${ANNO}-04-30`,
      data_fine: `${ANNO}-04-30`,
      tipo: 'permesso_orario', ora_inizio: '10:00', ora_fine: '13:00', durata: 3,
      urgente: false, note: '',
    },
    {
      id: 63, dipendente_id: 5,
      stato: 'in_attesa',
      data_creazione: `${ANNO}-04-07`, ora_creazione: '11:20',
      motivazione: 'Paternità/Maternità',
      data_inizio: `${ANNO}-05-02`,
      data_fine: `${ANNO}-05-02`,
      tipo: 'giornata_intera', ora_inizio: null, ora_fine: null, durata: 8,
      urgente: false, note: 'Congedo paternità.',
    },
    {
      id: 64, dipendente_id: 6,
      stato: 'in_attesa',
      data_creazione: `${ANNO}-04-09`, ora_creazione: '06:45',
      motivazione: 'Lutto',
      data_inizio: `${ANNO}-04-10`,
      data_fine: `${ANNO}-04-10`,
      tipo: 'giornata_intera', ora_inizio: null, ora_fine: null, durata: 8,
      urgente: true, note: '',
    },
    {
      id: 65, dipendente_id: 3,
      stato: 'approvata',
      data_creazione: `${ANNO}-03-20`, ora_creazione: '10:00',
      motivazione: 'Donazione sangue',
      data_inizio: `${ANNO}-04-15`,
      data_fine: `${ANNO}-04-15`,
      tipo: 'giornata_intera', ora_inizio: null, ora_fine: null, durata: 8,
      urgente: false, note: '',
      decisione: {
        esito: 'approvata', direttore: 'Luca Bianchi',
        causale: 'Compatibile con pianificazione', note: '',
        data: `${ANNO}-03-21`, ora: '08:20',
      },
    },
    {
      id: 66, dipendente_id: 4,
      stato: 'rifiutata',
      data_creazione: `${ANNO}-03-18`, ora_creazione: '16:00',
      motivazione: 'Permesso personale',
      data_inizio: `${ANNO}-03-24`,
      data_fine: `${ANNO}-03-24`,
      tipo: 'giornata_intera', ora_inizio: null, ora_fine: null, durata: 8,
      urgente: false, note: '',
      decisione: {
        esito: 'rifiutata', direttore: 'Luca Bianchi',
        causale: 'Preavviso non sufficiente',
        note: 'Sotto la soglia dei 5 giorni, non si rientra nei casi di urgenza.',
        data: `${ANNO}-03-19`, ora: '11:00',
      },
    },
  ];

  // =========================================================
  // Coda email (per il supervisore)
  // =========================================================
  window.EMAIL_DEMO = [
    { id: 201, richiesta_id: 50, tipo: 'conferma_ricezione', destinatario_nome: 'Mario Rossi', destinatario_email: 'm.rossi@pdpboxdoccia.com', oggetto: 'Conferma ricezione richiesta #50', stato_invio: 'inviata', tentativi: 1, errore: null, data_creazione: `${ANNO}-04-05`, ora_creazione: '13:25', data_invio: `${ANNO}-04-05`, ora_invio: '13:25' },
    { id: 202, richiesta_id: 50, tipo: 'notifica_direttore', destinatario_nome: 'Luca Bianchi', destinatario_email: 'l.bianchi@pdpboxdoccia.com', oggetto: 'Nuova richiesta permesso #50', stato_invio: 'inviata', tentativi: 1, errore: null, data_creazione: `${ANNO}-04-05`, ora_creazione: '13:25', data_invio: `${ANNO}-04-05`, ora_invio: '13:26' },
    { id: 203, richiesta_id: 51, tipo: 'conferma_ricezione', destinatario_nome: 'Mario Rossi', destinatario_email: 'm.rossi@pdpboxdoccia.com', oggetto: 'Conferma ricezione richiesta #51', stato_invio: 'inviata', tentativi: 1, errore: null, data_creazione: `${ANNO}-04-07`, ora_creazione: '08:42', data_invio: `${ANNO}-04-07`, ora_invio: '08:42' },
    { id: 204, richiesta_id: 51, tipo: 'notifica_direttore', destinatario_nome: 'Luca Bianchi', destinatario_email: 'l.bianchi@pdpboxdoccia.com', oggetto: 'Nuova richiesta permesso #51', stato_invio: 'inviata', tentativi: 1, errore: null, data_creazione: `${ANNO}-04-07`, ora_creazione: '08:42', data_invio: `${ANNO}-04-07`, ora_invio: '08:43' },
    { id: 205, richiesta_id: null, tipo: 'codice_2fa', destinatario_nome: 'Luca Bianchi', destinatario_email: 'l.bianchi@pdpboxdoccia.com', oggetto: 'Codice di verifica accesso', stato_invio: 'inviata', tentativi: 1, errore: null, data_creazione: `${ANNO}-04-09`, ora_creazione: '07:30', data_invio: `${ANNO}-04-09`, ora_invio: '07:30' },
    { id: 206, richiesta_id: 49, tipo: 'esito_dipendente', destinatario_nome: 'Mario Rossi', destinatario_email: 'm.rossi@pdpboxdoccia.com', oggetto: 'Esito richiesta permesso #49', stato_invio: 'creata', tentativi: 0, errore: null, data_creazione: `${ANNO}-04-09`, ora_creazione: '09:15', data_invio: null, ora_invio: null },
    { id: 207, richiesta_id: 49, tipo: 'esito_amministrazione', destinatario_nome: 'Giulia Neri', destinatario_email: 'g.neri@pdpboxdoccia.com', oggetto: 'Richiesta #49 da lavorare', stato_invio: 'creata', tentativi: 0, errore: null, data_creazione: `${ANNO}-04-09`, ora_creazione: '09:15', data_invio: null, ora_invio: null },
    { id: 208, richiesta_id: 47, tipo: 'esito_dipendente', destinatario_nome: 'Mario Rossi', destinatario_email: 'm.rossi@pdpboxdoccia.com', oggetto: 'Esito richiesta permesso #47', stato_invio: 'fallita', tentativi: 5, errore: 'SMTP timeout: server di destinazione non raggiungibile dopo 30s', data_creazione: `${ANNO}-03-16`, ora_creazione: '10:31', data_invio: null, ora_invio: null },
    { id: 209, richiesta_id: 60, tipo: 'notifica_direttore', destinatario_nome: 'Luca Bianchi', destinatario_email: 'l.bianchi@pdpboxdoccia.com', oggetto: 'Nuova richiesta permesso #60 (Anna Verdi)', stato_invio: 'inviata', tentativi: 2, errore: null, data_creazione: `${ANNO}-04-02`, ora_creazione: '09:15', data_invio: `${ANNO}-04-02`, ora_invio: '09:16' },
    { id: 210, richiesta_id: 61, tipo: 'notifica_direttore', destinatario_nome: 'Luca Bianchi', destinatario_email: 'l.bianchi@pdpboxdoccia.com', oggetto: 'URGENTE: Nuova richiesta #61 (Paolo Russo)', stato_invio: 'fallita', tentativi: 5, errore: 'Connessione SMTP rifiutata dal server', data_creazione: `${ANNO}-04-08`, ora_creazione: '07:50', data_invio: null, ora_invio: null },
  ];
})();
