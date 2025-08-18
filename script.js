const themeToggleBtn = document.getElementById("theme-toggle");

// Fungsi untuk menerapkan tema
function applyTheme(theme) {
  document.body.classList.remove("light-mode", "dark-mode");
  const themeIcon = themeToggleBtn.querySelector("i");

  if (theme === "dark") {
    document.body.classList.add("dark-mode");
    themeIcon.className = "fas fa-sun";
  } else if (theme === "light") {
    document.body.classList.add("light-mode");
    themeIcon.className = "fas fa-moon";
  } else {
    // Sistem
    const prefersDark =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (prefersDark) {
      document.body.classList.add("dark-mode");
      themeIcon.className = "fas fa-sun";
    } else {
      document.body.classList.add("light-mode");
      themeIcon.className = "fas fa-moon";
    }
  }
  localStorage.setItem("theme", theme);
}

// Fungsi untuk beralih mode
function toggleTheme() {
  let currentTheme = localStorage.getItem("theme");
  if (currentTheme === "light") {
    applyTheme("dark");
  } else if (currentTheme === "dark") {
    applyTheme("system");
  } else {
    applyTheme("light");
  }
}

function renderRepos(repos) {
  const repoList = document.getElementById("repo-list");
  repoList.innerHTML = "";

  if (repos.length === 0) {
    repoList.innerHTML = "<li>Tidak ada repositori publik yang ditemukan.</li>";
    return;
  }

  repos.forEach((repo) => {
    const listItem = document.createElement("li");

    const repoLink = document.createElement("a");
    repoLink.href = repo.html_url;
    repoLink.textContent = repo.name;
    repoLink.target = "_blank";

    if (repo.language) {
      const langIcon = document.createElement("span");
      langIcon.className = `language-icon lang-${repo.language.replace(
        / /g,
        ""
      )}`;
      repoLink.prepend(langIcon);
    }

    const repoDescription = document.createElement("p");
    repoDescription.textContent = repo.description || "Tidak ada deskripsi.";

    listItem.appendChild(repoLink);
    listItem.appendChild(repoDescription);
    repoList.appendChild(listItem);
  });
}

// Fungsi untuk beralih tampilan (list/grid)
function setView(viewType) {
  const repoList = document.getElementById("repo-list");
  if (viewType === "list") {
    repoList.classList.remove("grid-view");
    repoList.classList.add("list-view");
  } else if (viewType === "grid") {
    repoList.classList.remove("list-view");
    repoList.classList.add("grid-view");
  }
}

// Inisialisasi: Dapatkan preferensi tema dari penyimpanan lokal atau sistem
const storedTheme = localStorage.getItem("theme") || "system";
applyTheme(storedTheme);

// Ambil data repositori dari file JSON lokal
fetch("repos.json")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then((repos) => {
    renderRepos(repos);
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
    const repoList = document.getElementById("repo-list");
    repoList.innerHTML = "<li>Gagal memuat daftar aplikasi.</li>";
  });
