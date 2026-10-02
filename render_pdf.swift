import Foundation
import PDFKit
import CoreGraphics
import ImageIO
import UniformTypeIdentifiers

let pdfUrl = URL(fileURLWithPath: "PORTOFOLIO BELA 2026.pdf")
guard let doc = PDFDocument(url: pdfUrl) else {
    print("Failed to open PDF")
    exit(1)
}

let outputDir = URL(fileURLWithPath: "scratch_pages")
try? FileManager.default.createDirectory(at: outputDir, withIntermediateDirectories: true)

for i in 0..<doc.pageCount {
    guard let page = doc.page(at: i) else { continue }
    let bounds = page.bounds(for: .mediaBox)
    let scale: CGFloat = 2.0 // 2x resolution
    let width = Int(bounds.width * scale)
    let height = Int(bounds.height * scale)
    
    let colorSpace = CGColorSpaceCreateDeviceRGB()
    let bitmapInfo = CGImageAlphaInfo.premultipliedLast.rawValue
    guard let context = CGContext(
        data: nil,
        width: width,
        height: height,
        bitsPerComponent: 8,
        bytesPerRow: 0,
        space: colorSpace,
        bitmapInfo: bitmapInfo
    ) else {
        print("Failed to create CGContext for page \(i+1)")
        continue
    }
    
    context.setFillColor(CGColor(red: 1, green: 1, blue: 1, alpha: 1))
    context.fill(CGRect(x: 0, y: 0, width: width, height: height))
    
    context.scaleBy(x: scale, y: scale)
    page.draw(with: .mediaBox, to: context)
    
    guard let image = context.makeImage() else {
        print("Failed to make image for page \(i+1)")
        continue
    }
    
    let outUrl = outputDir.appendingPathComponent("page_\(i+1).png")
    guard let destination = CGImageDestinationCreateWithURL(outUrl as CFURL, UTType.png.identifier as CFString, 1, nil) else {
        print("Failed to create destination for page \(i+1)")
        continue
    }
    
    CGImageDestinationAddImage(destination, image, nil)
    if CGImageDestinationFinalize(destination) {
        print("Successfully saved page \(i+1) to \(outUrl.path)")
    } else {
        print("Failed to save page \(i+1)")
    }
}
