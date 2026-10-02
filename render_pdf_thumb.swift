import Foundation
import PDFKit
import AppKit

let pdfUrl = URL(fileURLWithPath: "PORTOFOLIO BELA 2026.pdf")
guard let doc = PDFDocument(url: pdfUrl) else {
    print("Failed to open PDF")
    exit(1)
}

let outputDir = URL(fileURLWithPath: "scratch_pages")
try? FileManager.default.createDirectory(at: outputDir, withIntermediateDirectories: true)

for i in 0..<doc.pageCount {
    guard let page = doc.page(at: i) else { continue }
    let bounds = page.bounds(for: .cropBox)
    print("Page \(i+1) bounds: \(bounds)")
    let img = page.thumbnail(of: CGSize(width: 1920, height: 1080), for: .cropBox)
    if let tiffData = img.tiffRepresentation,
       let bitmap = NSBitmapImageRep(data: tiffData),
       let pngData = bitmap.representation(using: .png, properties: [:]) {
        let outUrl = outputDir.appendingPathComponent("thumb_\(i+1).png")
        try? pngData.write(to: outUrl)
        print("Wrote thumb_\(i+1).png, bytes: \(pngData.count)")
    } else {
        print("Failed to convert image for page \(i+1)")
    }
}
