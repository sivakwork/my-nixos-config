{
  lib,
  makeDesktopItem,
  copyDesktopItems,
  fetchgit,
  wrapGAppsHook4,
  clang_19,
  llvmPackages_19,
  alsa-lib,
  mesa,
  vulkan-headers,
  gtk3,
  git,
  libudev-zero,
  libxkbcommon,
  pkg-config,
  openssl
}:

llvmPackages_19.libcxxStdenv.mkDerivation rec {
  pname = "armorpaint";
  version = "4e5971fda765086c0e194f61e9a731ad9b0c8d07";

  src = fetchgit {
    url = "https://github.com/armory3d/armortools";
    rev = version;
    hash = "sha256-GW+yCSA+lVLNfpUD9O61lA4Y0c8/zQljINWWfik0PUc=";
    deepClone = true;
  };

  buildInputs = [
    wrapGAppsHook4
    copyDesktopItems
    clang_19
    alsa-lib
    mesa
    gtk3
    git
    libudev-zero
    libxkbcommon
    vulkan-headers
    pkg-config
    openssl
  ];

  desktopItems = [
    (makeDesktopItem {
      name = pname;
      desktopName = "ArmorPaint";
      exec = "ArmorPaint";
      icon = "armorpaint";
      categories = [ "Art" ];
    })
  ];

  buildPhase = ''
    runHook preBuild

    NIX_CFLAGS_COMPILE="$(pkg-config --cflags gtk+-3.0) $NIX_CFLAGS_COMPILE"

    cp -r $src/* $TMPDIR
    cp -r $src/.git $TMPDIR
    chmod -R +rw $TMPDIR

    patchelf \
      --set-interpreter "$(cat $NIX_CC/nix-support/dynamic-linker)" \
      $TMPDIR/base/tools/bin/linux_x64/amake

    patchShebangs $TMPDIR/base/make

    cd $TMPDIR/paint

    ../base/make --graphics vulkan --compile --embed

    runHook postBuild
  '';

  installPhase = ''
    runHook preInstall

    mkdir -p $out/bin

    install -D \
      $TMPDIR/paint/build/out/ArmorPaint \
      $out/bin/ArmorPaint

    mkdir -p $out/share/icons/hicolor/256x256/apps

    install -D \
      $src/paint/icon.png \
      $out/share/icons/hicolor/256x256/apps/armorpaint.png

    runHook postInstall
  '';

  meta = with lib; {
    description = "3D PBR based texturing software.";
    homepage = "https://armorpaint.org";
    changelog = "https://armorpaint.org/notes";
    license = licenses.zlib;
    platforms = platforms.linux;
    mainProgram = "ArmorPaint";
    maintainers = with maintainers; [ miampf ];
  };
}
