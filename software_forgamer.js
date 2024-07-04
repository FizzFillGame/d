 const apps = [
            { name: 'Steam', description: 'A digital distribution platform for video games.', status: 'Download', icon: 'https://upload.wikimedia.org/wikipedia/commons/8/83/Steam_icon_logo.svg', link: 'https://store.steampowered.com/' },
            { name: 'Discord', description: 'A VoIP, instant messaging and digital distribution platform.', status: 'Download', icon: 'https://upload.wikimedia.org/wikipedia/commons/9/98/Discord_logo.svg', link: 'https://discord.com/' },
            { name: 'OBS Studio', description: 'Free and open source software for video recording and live streaming.', status: 'Download', icon: 'https://upload.wikimedia.org/wikipedia/commons/3/39/OBS_Studio_Logo.png', link: 'https://obsproject.com/' },
            { name: 'NVIDIA GeForce Experience', description: 'Software suite for NVIDIA GPU users.', status: 'Download', icon: 'https://upload.wikimedia.org/wikipedia/commons/7/78/Nvidia_geforce_experience.png', link: 'https://www.nvidia.com/en-us/geforce/geforce-experience/' },
            { name: 'MSI Afterburner', description: 'The ultimate graphics card utility.', status: 'Download', icon: 'https://upload.wikimedia.org/wikipedia/en/0/0c/MSI_Afterburner_logo.png', link: 'https://www.msi.com/page/afterburner' },
            { name: 'Razer Synapse', description: 'Unified configuration software that allows you to rebind controls.', status: 'Download', icon: 'https://upload.wikimedia.org/wikipedia/en/5/5e/Razer_Synapse_3.png', link: 'https://www.razer.com/synapse-3' },
            { name: 'Fraps', description: 'Real-time video capture & benchmarking.', status: 'Download', icon: 'https://upload.wikimedia.org/wikipedia/en/5/5a/Fraps_Logo.png', link: 'http://www.fraps.com/' },
            { name: 'Battle.net', description: 'An internet-based online gaming, social networking, digital distribution, and digital rights management platform.', status: 'Download', icon: 'https://upload.wikimedia.org/wikipedia/commons/0/00/Battle.net_Desktop_Icon_2018.png', link: 'https://www.blizzard.com/en-us/apps/battle.net/desktop' },
            { name: 'Epic Games Launcher', description: 'A digital distribution platform for video games and software.', status: 'Download', icon: 'https://upload.wikimedia.org/wikipedia/commons/3/31/Epic_Games_logo.svg', link: 'https://www.epicgames.com/store/en-US/download' },
            { name: 'GOG Galaxy', description: 'A gaming client providing one interface for multiple stores.', status: 'Download', icon: 'https://upload.wikimedia.org/wikipedia/commons/2/2e/GOG.com_Logo_2020.png', link: 'https://www.gog.com/galaxy' },
            { name: 'Origin', description: 'A digital distribution platform for purchasing and playing video games.', status: 'Download', icon: 'https://upload.wikimedia.org/wikipedia/en/1/1b/Origin_Logo.png', link: 'https://www.origin.com/' },
            { name: 'Uplay', description: 'A digital distribution, digital rights management, multiplayer and communications service.', status: 'Download', icon: 'https://upload.wikimedia.org/wikipedia/commons/8/88/Uplay_logo.png', link: 'https://uplay.ubisoft.com/' },
            { name: 'TeamSpeak', description: 'Voice over IP (VoIP) application for audio communication.', status: 'Download', icon: 'https://upload.wikimedia.org/wikipedia/en/f/f2/TeamSpeak_Logo.png', link: 'https://teamspeak.com/' },
            { name: 'AMD Radeon Software', description: 'Suite of utilities designed to run on Microsoft Windows.', status: 'Download', icon: 'https://upload.wikimedia.org/wikipedia/commons/4/4a/AMD_Radeon_Software_Logo.png', link: 'https://www.amd.com/en/support' },
            { name: 'Logitech G HUB', description: 'Advanced gaming software for Logitech G gaming devices.', status: 'Download', icon: 'https://upload.wikimedia.org/wikipedia/en/b/bb/Logitech_G_logo.png', link: 'https://www.logitechg.com/en-us/innovation/g-hub.html' },
            { name: 'Playnite', description: 'An open source video game library manager and launcher.', status: 'Download', icon: 'https://upload.wikimedia.org/wikipedia/commons/8/8d/Playnite_Logo.png', link: 'https://playnite.link/' },
            { name: 'Parsec', description: 'Game streaming software that allows you to play games with friends in co-op.', status: 'Download', icon: 'https://upload.wikimedia.org/wikipedia/commons/3/30/Parsec_logo.png', link: 'https://parsec.app/' },
            { name: 'Game Jolt', description: 'Social community platform for video games.', status: 'Download', icon: 'https://upload.wikimedia.org/wikipedia/commons/1/16/Game_Jolt_Logo.png', link: 'https://gamejolt.com/' },
            { name: 'Itch.io', description: 'A website for users to host, sell and download indie games.', status: 'Download', icon: 'https://upload.wikimedia.org/wikipedia/commons/5/58/Itch.io_Logo_2020.png', link: 'https://itch.io/' },
            { name: 'Twitch', description: 'A video live streaming service that focuses on video game live streaming.', status: 'Download', icon: 'https://upload.wikimedia.org/wikipedia/commons/5/51/Twitch_Logo_2019.svg', link: 'https://www.twitch.tv/' }
        ];

        const appList = document.getElementById('appList');

        apps.forEach(app => {
            const appItem = document.createElement('div');
            appItem.classList.add('app-item-new');

            const icon = document.createElement('img');
            icon.src = app.icon;

            const appInfo = document.createElement('div');
            appInfo.classList.add('app-info-new');

            const appName = document.createElement('div');
            appName.classList.add('app-name-new');
            const name = document.createElement('span');
            name.textContent = app.name;
            appName.appendChild(icon);
            appName.appendChild(name);

            const description = document.createElement('div');
            description.classList.add('app-description-new');
            description.textContent = app.description;

            appInfo.appendChild(appName);
            appInfo.appendChild(description);

            const status = document.createElement('div');
            status.classList.add('status-new');

            const dot = document.createElement('span');
            dot.classList.add('dot-new', app.status === 'Updated' ? 'updated-new' : 'update-available-new');

            const statusText = document.createElement('span');
            statusText.textContent = app.status;

            const downloadButton = document.createElement('a');
            downloadButton.classList.add('update-button-new');
            downloadButton.textContent = 'Download';
            downloadButton.href = app.link;
            downloadButton.target = '_blank'; // Open link in new tab

            status.appendChild(dot);
            status.appendChild(statusText);
            status.appendChild(downloadButton);

            appItem.appendChild(appInfo);
            appItem.appendChild(status);

            appList.appendChild(appItem);
        });
