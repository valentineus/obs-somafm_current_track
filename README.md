# Notification about the current track

Pop-up notification about the currently playing music track.
Uses playlists of a non-commercial radio station
[SomaFM](https://somafm.com/).
Created specially for
[Open Broadcaster Software](https://obsproject.com/).

* [Demo](https://valentineus.link/obs-somafm-current-track/?duration=7000&interval=15000&channel=defcon);
* [Support SomaFM](https://somafm.com/support/);

## Using

Example:
```url
https://valentineus.link/obs-somafm-current-track/?duration=7000&interval=15000&channel=defcon
```

Open the view page.
Be sure to set parameter `channel`.
Parameter `channel` configures an alert for a specific channel.
You can see the list of all channels
[here](https://somafm.com/listen/).

Additional, optional parameters:
* `duration` - Duration of the notification.
Default 10 seconds, the value is in milliseconds.
* `interval` - Refresh interval for the playlist.
Default 10 seconds, the value is in milliseconds.

## Development

To start a local server for development, you need:

1. Clone the source repository:

```bash
git clone "https://github.com/valentineus/obs-somafm-current-track.git"
```

2. Install packages:

```bash
cd "obs-somafm-current-track" && bundle update
```

3. Start the server:

```bash
bundle exec jekyll serve --host "${IP}" --port "${PORT}" --trace
```

Please note in the executable command uses environment variables `IP` and `PORT`.

## License

<img width="256px" alt="MIT License" src="https://raw.githubusercontent.com/valentineus/valentineus.github.io/master/assets/images/7d05cad0-d553-42c7-be1f-7007926ba720.png" />

[MIT](LICENSE.txt).
Copyright (c)
[Valentin Popov](https://valentineus.link/).
