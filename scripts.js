document.addEventListener('DOMContentLoaded', function() {
    const progressBar = document.querySelector('.loading-progress');
    const loadingText = document.querySelector('.loading-text');
    const loadingDetails = document.querySelector('.loading-details');
    const loadingHints = document.querySelector('.loading-hints');

    function updateProgress(progress) {
        progressBar.style.width = progress + '%';
    }

    function updateLoadingText(text) {
        loadingText.textContent = text;
    }

    function updateLoadingDetails(details) {
        loadingDetails.textContent = details;
    }

    function updateLoadingHints(hints) {
        loadingHints.textContent = hints;
    }

    window.SetStatusChanged = function(status) {
        updateLoadingText(status);
    }

    window.SetFilesTotal = function(total) {
        updateLoadingDetails(`Total Files: ${total}`);
    }

    window.SetFilesNeeded = function(needed) {
        updateLoadingDetails(`Files Needed: ${needed}`);
    }

    window.GameDetails = function(servername, serverurl, mapname, maxplayers, steamid, gamemode) {
        updateLoadingHints(`Server: ${servername}, Map: ${mapname}, Gamemode: ${gamemode}`);
    }

    window.DownloadingFile = function(fileName) {
        updateLoadingDetails(`Downloading: ${fileName}`);
    }

    let progress = 0;
    function simulateProgress() {
        if (progress < 100) {
            progress += 1;
            updateProgress(progress);
            updateLoadingText(`Loading: ${progress}%`);
            setTimeout(simulateProgress, 100);
        }
    }

    simulateProgress();
});
