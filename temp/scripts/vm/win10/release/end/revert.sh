#!/run/current-system/sw/bin/bash
set -x

# Attach GPU devices to host
# Use your GPU and HDMI Audio PCI host device
echo "0000:01:00.0" > /sys/bus/pci/drivers/vfio-pci/unbind
echo "0000:01:00.1" > /sys/bus/pci/drivers/vfio-pci/unbind

virsh nodedev-reattach pci_0000_01_00_0
virsh nodedev-reattach pci_0000_01_00_1

# Unload vfio module
modprobe -r vfio-pci

# Load AMD kernel module
#modprobe amdgpu

# Rebind framebuffer to host
echo "efi-framebuffer.0" > /sys/bus/platform/drivers/efi-framebuffer/bind

# Load NVIDIA kernel modules
modprobe nvidia_drm
modprobe nvidia_modeset
modprobe nvidia_uvm
modprobe nvidia

# Bind VTconsoles: might not be needed
echo 1 > /sys/class/vtconsole/vtcon0/bind
echo 1 > /sys/class/vtconsole/vtcon1/bind

# Restart Display Manager
systemctl start display-manager