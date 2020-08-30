#!/bin/bash
VAR="/home/berilo/Desktop/16 /home/berilo/Desktop/unixstuff";
VAR="$VAR /home/berilo/.sudo_as_admin_successful"
for i in $VAR; do
echo "$i"
if [ -e "$i" ]
then
echo "o caminho está habilitado";
if [ -w "$i" ]
then
echo "você também pode editar";
fi
if [ -d "$i" ]
then
echo "directory has $( ls $i | wc -l ) files";
fi
fi
done