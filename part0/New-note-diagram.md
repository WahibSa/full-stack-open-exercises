```mermaid
sequenceDiagram
    participant User
    participant Browser
    participant Server

    User->>Browser: Writes a note
    Browser->>Browser: Validates the note
    Browser->>Server: POST /notes
    Server->>Server: Saves the new note
    Server-->>Browser: 201 Created
    Browser-->>Browser: Updates the view
    Browser-->>User: Shows the new note
