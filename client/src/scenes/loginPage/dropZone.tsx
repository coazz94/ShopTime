import { Box } from "@mui/material"
import { useDropzone, FileWithPath } from "react-dropzone"

export default function Basic({
    getDropzone,
}: {
    getDropzone: React.Dispatch<React.SetStateAction<File | null>>
}) {
    const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
        accept: {
            "image/jpeg": [],
            "image/png": [],
        },
        maxFiles: 1,

        onDrop: (file: File[]) => {
            getDropzone(() => file[0])
        },
    })

    const file = acceptedFiles.map((file: FileWithPath) => (
        <li key={file.path}>{file.path?.split(".")[0]}</li>
    ))

    return (
        <Box
            {...getRootProps()}
            border={`2px dashed`}
            p="1rem"
            width="20rem"
            display="flex"
            justifyContent="center"
            sx={{
                "&:hover": {
                    cursor: "pointer",
                },
            }}
        >
            <input {...getInputProps()} />

            {file.length < 1 ? (
                <p>Drag 'n' drop a Profile Pic here</p>
            ) : (
                <p>{file}</p>
            )}
        </Box>
    )
}
